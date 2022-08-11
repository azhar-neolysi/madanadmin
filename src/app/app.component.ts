import { Component, OnInit, ViewChild } from '@angular/core';

import { Platform, MenuController, IonRouterOutlet, AlertController } from '@ionic/angular';
import { SplashScreen } from '@awesome-cordova-plugins/splash-screen/ngx';
import { StatusBar } from '@awesome-cordova-plugins/status-bar/ngx';
import { Router } from '@angular/router';
import { ToastService } from './services/toast/toast.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  @ViewChild(IonRouterOutlet, { static: false }) routerOutlet: IonRouterOutlet;
  menuList = [];
  backButtonSubscription;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private menuCtrl: MenuController,
    private router: Router,
    private toaster: ToastService,
    public alertController: AlertController,
    private location: Location,
  ) {
    this.initializeApp();
    // this.ngAfterViewInit();
  }

  ngOnInit() {
    this.formMenuList();
  }
  // ionViewWillEnter() {

  //   this.backButtonSubscription = this.platform.backButton.subscribeWithPriority(666666, () => { navigator['app'].exitApp(); });
  // }
  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.show();
      this.splashScreen.hide();
    }); this.platform.backButton.subscribeWithPriority(10, (processNextHandler) => {
      console.log('Back press handler!');
      if (this.location.isCurrentPathEqualTo('/home') || this.location.isCurrentPathEqualTo('/login')) {

        // Show Exit Alert!
        console.log('Show Exit Alert!');
        this.showExitConfirm();
        processNextHandler();
      } else {

        // Navigate to back page
        console.log('Navigate to back page');
        this.location.back();
        // this.showExitConfirm();
        // processNextHandler();
      }

    });

    this.platform.backButton.subscribeWithPriority(5, () => {
      console.log('Handler called to force close!');
      this.alertController.getTop().then(r => {
        if (r) {
          (navigator as any).app.exitApp();
        }
      }).catch(e => {
        console.log(e);
      });
    });
  }
  showExitConfirm() {
    this.alertController.create({
      header: 'App termination',
      message: 'Do you want to close the app?',
      backdropDismiss: false,
      cssClass: 'custom-alert',
      // mode:'ios',
      buttons: [{
        text: 'Stay',
        role: 'cancel',
        cssClass: 'alert-button-cancel',
        handler: () => {
          console.log('Application exit prevented!');
        }
      }, {
        text: 'Exit',
        cssClass: 'alert-button-confirm',
        handler: () => {
          (navigator as any).app.exitApp();
        }
      }]
    })
      .then(alert => {
        alert.present();
      });
  }

  backButtonEvent() {
    this.backButtonSubscription =
      this.platform.backButton.subscribeWithPriority(10, async () => {
        console.log('-->>', this.routerOutlet.canGoBack(), this.router.url);
        if (this.router.url === '/home') {
          (navigator as any).app.exitApp(); // work in ionic 6
        } else if (this.routerOutlet.canGoBack()) {
          this.routerOutlet.pop();
        } else {
          const toast = await this.toaster.warning(
            'Press back again to exit App.'
          );
        }
      });
  }
  // eslint-disable-next-line @angular-eslint/use-lifecycle-interface
  ngAfterViewInit() {
    console.log('ngAfterViewInit');
    // this.backButtonEvent();
  }
  // eslint-disable-next-line @angular-eslint/use-lifecycle-interface
  ngOnDestroy() {
    console.log('ngOnDestroy');
    // this.backButtonSubscription.unsubscribe();
  }

  ionViewDidLeave() {
    // this.backButtonSubscription.unsubscribe();
  }

  closeMenu() {
    this.menuCtrl.close();
  }

  formMenuList() {
    // Removing Location and Reports
    const menuIcons = [
      'home',
      'bus',
      'document-text-outline',
      'file-tray-stacked',
      'book-outline',
      'card-outline',
      'man',
      'people',
      'podium',
      'navigate-outline', //add by azar location and reports
      'list-outline',
      'person-outline',
    ];
    const menuTitles = [
      'Home',
      'Enquiry Responses',
      'LR',
      'Rate Card',
      'Booking Receipts',
      'Booking Payments',
      'Reference',
      'Employee',
      'ORG',
      'Location', //add by azar
      'Reports',
      'My Profile',
    ];
    const menuLinks = [
      'home',
      'vehicle-details',
      'lr',
      'rate-card',
      'booking-recipt',
      'booking-payments',
      'reference',
      'employee',
      'org',
      'location', //add by azar
      'reports',
      'my-profile',
    ];

    for (let i = 0; i < menuTitles.length; i++) {
      const menuListItem = {
        icon: menuIcons[i],
        title: menuTitles[i],
        url: menuLinks[i],
      };
      this.menuList.push(menuListItem);
    }
  }
}
