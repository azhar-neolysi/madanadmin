
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AlertService } from 'src/app/services/alert/alert.service';
import { LoaderService } from 'src/app/services/loader/loader.service';
import { RateApiService } from 'src/app/services/rate-card/rate-api.service';
import { ToastService } from 'src/app/services/toast/toast.service';

@Component({
  selector: 'app-rate-card-list',
  templateUrl: './rate-card-list.page.html',
  styleUrls: ['./rate-card-list.page.scss'],
})
export class RateCardListPage implements OnInit {
  rateList: any = [];
  viewChanger: any;

  constructor(private router: Router,
    private rateApi: RateApiService,
    private toaster: ToastService,
    private alert: AlertService,
    private loader: LoaderService) { }

  ngOnInit() { }
  ionViewWillEnter() {
    this.viewChanger='CustomerRate';
    this.getRateList('CustomerRate');
    console.log('==>', this.viewChanger);
  }

  newRate() {
    this.router.navigate(['rate-card', 'new']);

  }
  changeView() {

    if (this.viewChanger) {
      if(this.viewChanger==='CustomerRate'){

        this.viewChanger='TransporterRate';
      }
      console.log('==>', this.viewChanger);
      this.getRateList('TransporterRate');
    }
    else
      {this.getRateList('CustomerRate');}
  }
  getRateList(rateType) {
    this.loader.createLoader();
    this.rateApi.getRateList(rateType).pipe().subscribe(success => {
      this.loader.dismissLoader();
      console.log('success', success);
      this.rateList = success;
    },
      failure => {
        this.loader.dismissLoader();
        console.log('failure', failure);
      });

  }
  editRate(id) {
    this.router.navigate(['rate-card', id, 'edit']);
  }
  deleteRate(rateId) {
    this.alert.alertPromt(`Are you sure you want to delete? `).then(data => {
      if (Boolean(data)) {
        this.loader.createLoader();
        const req: any = {};
        req.rateId = rateId;
        req.RefModifiedBy = 1;
        this.rateApi.deleteRate(rateId, req).subscribe(success => {
          console.log('success', success);
          if (success[0].status === 3) {
            this.toaster.success(success[0].msg);
            this.ionViewWillEnter();
            return;
          }
          this.toaster.danger(success[0].msg);
        },
          failure => {
            this.toaster.danger(failure[0].msg);
            console.log('failure', failure);
          });
      }
    });
    this.loader.dismissLoader();

  }


}
