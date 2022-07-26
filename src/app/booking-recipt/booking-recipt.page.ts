
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AlertService } from '../services/alert/alert.service';
import { ReciptsApiService } from '../services/booking-recipt/recipt-api.service';
import { LoaderService } from '../services/loader/loader.service';
import { ToastService } from '../services/toast/toast.service';


@Component({
  selector: 'app-booking-recipt',
  templateUrl: './booking-recipt.page.html',
  styleUrls: ['./booking-recipt.page.scss'],
})
export class BookingReciptPage implements OnInit {

  bookingReceipts: any = [];
  constructor(private router: Router,
    private reciptsApi: ReciptsApiService,
    private toaster: ToastService,
    private alert: AlertService,
    private loader: LoaderService) { }

  ngOnInit() { }
  ionViewWillEnter() {
    this.getbookingReciptsList('', '', '');
  }

  newBookingReceipt() {
    this.router.navigate(['booking-recipt', 'new']);
  }

  getbookingReciptsList(paymentId, bookingId, mappingId) {
    this.loader.createLoader();
    this.reciptsApi.getBookingRecipts(paymentId, bookingId, mappingId).pipe().subscribe(success => {
      this.loader.dismissLoader();
      console.log('success', success);
      this.bookingReceipts = success;
    },
      failure => {
        this.loader.dismissLoader();
        console.log('failure', failure);
      });
  }

  editBookingRecipt(reciptId) {
    this.router.navigate(['booking-recipt', 'edit', reciptId]);
  }

  deleteBookingRecipt(reciptId) {
    this.alert.alertPromt(`Are you sure you want to delete? `).then(data => {
      if (Boolean(data)) {
        this.loader.createLoader();
        const req: any = {};
        req.bookingReceiptId = reciptId;
        req.refModifiedBy = 1;
        this.reciptsApi.deleteRecipt(reciptId, req).subscribe(success => {
          this.loader.dismissLoader();
          console.log('success', success);
          if (success[0].status === 3) {
            this.toaster.success(success[0].msg);
            this.ionViewWillEnter();
            return;
          }
          this.toaster.danger(success[0].msg);
        }, failure => {
          this.loader.dismissLoader();
          this.toaster.danger(failure[0].msg);
          console.log();
        });
      }
    });
  }


}
