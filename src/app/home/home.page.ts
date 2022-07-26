import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { HomeApiService } from '../services/home/home-api.service';
import { LoaderService } from '../services/loader/loader.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  backButtonSubscription;
  bookingDetails: any = [];
  constructor(private router: Router,
    private homeService: HomeApiService,
    private loader: LoaderService,
    private platform: Platform) {
    this.backButtonSubscription = this.platform.backButton.subscribeWithPriority(10, () => {
      // if (this.constructor.name == 'HomePage')
      if (window.confirm('Do you want to exit ?')) {
        (navigator as any).app.exitApp();
      }
    });
  }

  ngOnInit() { }

  ionViewWillEnter() {
    this.getRequestedData();

  }

  goToTruckDetail(latlong, polId) {
    this.router.navigate(['home', latlong, polId, 'truck-detail']);
  }
  getRequestedData() {
    this.loader.createLoader();
    this.homeService.getICData().pipe().subscribe(success => {
      this.loader.dismissLoader();
      console.log('success', success);
      this.bookingDetails = success;
    },
      failure => {
        this.loader.dismissLoader();
        console.log('failure', failure);
      });
  }

}
