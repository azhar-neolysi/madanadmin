import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AlertService } from 'src/app/services/alert/alert.service';
import { PaymentsApiService } from 'src/app/services/booking-payments/payments-api.service';
import { LoaderService } from 'src/app/services/loader/loader.service';
import { ToastService } from 'src/app/services/toast/toast.service';


@Component({
  selector: 'app-payment-list',
  templateUrl: './payment-list.page.html',
  styleUrls: ['./payment-list.page.scss'],
})
export class PaymentListPage implements OnInit {
  bookingPayments: any = [];
  constructor(private router: Router,
    private paymentApi: PaymentsApiService,
    private toaster: ToastService,
    private alert: AlertService,
    private loader: LoaderService) { }

  ngOnInit() { }
  ionViewWillEnter() {
    this.getbookingPaymentList('', '', '');
  }

  newBookingPayments() {
    this.router.navigate(['booking-payments', 'new']);

  }
  getbookingPaymentList(paymentId, bookingId, mappingId) {
    this.loader.createLoader();
    this.paymentApi.getBookingPaymentsList(paymentId, bookingId, mappingId).pipe().subscribe(success => {
      this.loader.dismissLoader();
      console.log('success', success);
      this.bookingPayments = success;
    },
      failure => {
        this.loader.dismissLoader();
        console.log('failure', failure);
      });
  }
  editpayment(paymentId) {
    this.router.navigate(['booking-payments', 'edit', paymentId]);
  }
  deletePayment(paymentId) {
    this.alert.alertPromt(`Are you sure you want to delete? `).then(data => {
      if (Boolean(data)) {
        const req: any = {};
        req.RefModifiedBy = 1;
        req.BookingPaymentsId = paymentId;
        console.log(req);
        this.loader.createLoader();
        this.paymentApi.deleteBookingPayment(paymentId, req).subscribe(
          success => {
            this.loader.dismissLoader();
            console.log('delete Data', success);
            if (success[0].status === 3) {
              this.toaster.success(success[0].msg);
              this.ionViewWillEnter();
              return;
            }
            this.toaster.danger(success[0].msg);
          }, failure => {
            this.loader.dismissLoader();
            console.log('ediutdatafail', failure);
          });
      }
    });
  }

}
