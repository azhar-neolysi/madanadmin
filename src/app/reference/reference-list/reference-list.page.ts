
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AlertService } from 'src/app/services/alert/alert.service';
import { LoaderService } from 'src/app/services/loader/loader.service';
import { ReferenceApiService } from 'src/app/services/reference/reference-api.service';
import { ToastService } from 'src/app/services/toast/toast.service';


@Component({
  selector: 'app-reference-list',
  templateUrl: './reference-list.page.html',
  styleUrls: ['./reference-list.page.scss'],
})
export class ReferenceListPage implements OnInit {
  referenceDetails: any = [];
  referenceListDetails: any = [];
  viewChanger: any;
  constructor(private router: Router,
    private referenceApi: ReferenceApiService,
    private toaster: ToastService,
    private alert: AlertService,
    private loader: LoaderService) { }

  ngOnInit() { }
  ionViewWillEnter() {
    this.getRefenceDeatils('');
  }

  newReference() {
    this.router.navigate(['reference', 'new']);

  }
  changeView() {
    console.log('==>', this.viewChanger);
    if (this.viewChanger) {
      this.getRefenceListDeatils('');
    }
    else
      {this.getRefenceDeatils('');}
  }
  getRefenceDeatils(rateType) {
    this.loader.createLoader();
    this.referenceApi.getReferenceDetails(rateType).pipe().subscribe(success => {
      this.loader.dismissLoader();
      console.log('success', success);
      this.referenceDetails = success;
    },
      failure => {
        this.loader.dismissLoader();
        console.log('failure', failure);
      });

  }
  getRefenceListDeatils(rateType) {
    this.loader.createLoader();
    this.referenceApi.getReferenceListDetails(rateType).pipe().subscribe(success => {
      this.loader.dismissLoader();
      console.log('success', success);
      this.referenceListDetails = success;
    },
      failure => {
        this.loader.dismissLoader();
        console.log('failure', failure);
      });

  }
  edit(id) {
    if (!this.viewChanger) {
      this.router.navigate(['reference', id, 'Referece', 'edit']);
    }
    else {
      this.router.navigate(['reference', id, 'RefereceList', 'edit']);
    }
  }
  deleteReference(id) {
    this.alert.alertPromt(`Are you sure you want to delete? `).then(data => {
      if (Boolean(data)) {
        this.loader.createLoader();
        const req: any = {};
        req.referenceId = id;
        req.refModifiedBy = 1;
        this.referenceApi.deleteReference(id, req).subscribe(success => {
          this.loader.dismissLoader();
          // console.log('added success', success);
          if (success[0].status === 3) {
            this.toaster.success(success[0].msg);
            this.ionViewWillEnter();
            return;
          }
          this.toaster.danger(success[0].msg);
        },
          failure => {
            this.loader.dismissLoader();
            this.toaster.danger(failure[0].msg);
            console.log('failure', failure);
          });
      }
    });
  }
  deleteReferenceList(id) {
    this.alert.alertPromt(`Are you sure you want to delete? `).then(data => {
      if (Boolean(data)) {
        this.loader.createLoader();
        const req: any = {};
        req.referenceListId = id;
        req.refModifiedBy = 1;
        this.referenceApi.deleteReferenceList(id, req).subscribe(success => {
          this.loader.dismissLoader();
          // console.log('added success', success);
          if (success[0].status === 3) {
            this.toaster.success(success[0].msg);
            this.ionViewWillEnter();
            return;
          }
          this.toaster.danger(success[0].msg);
        },
          failure => {
            this.loader.dismissLoader();
            this.toaster.danger(failure[0].msg);
            console.log('failure', failure);
          });
      }
    });
  }
}
