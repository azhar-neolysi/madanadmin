
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { ReciptsApiService } from 'src/app/services/booking-recipt/recipt-api.service';
import { LoaderService } from 'src/app/services/loader/loader.service';
import { ToastService } from 'src/app/services/toast/toast.service';
;


@Component({
  selector: 'app-new-recipt',
  templateUrl: './new-recipt.page.html',
  styleUrls: ['./new-recipt.page.scss'],
})
export class NewReciptPage implements OnInit {

  vehicleBookings: any = [];
  paymentPurposes: any = [];
  paymentModes: any = [];
  editReciptData: any = [];
  reciptForm = this.fb.group({
    refOrgId: [3],
    // RefCreatedBy = 1;
    refBookingId: ['', [Validators.required]],
    refReferenceListModeId: ['', [Validators.required]],
    refReferenceListPayPurposeId: ['', [Validators.required]],
    recipetDate: ['', [Validators.required]],
    amount: ['', [Validators.required]],
    description: ['']
  });
  editReciptId = -1;
  isEdit = false;
  constructor(private router: Router,
    private reciptApi: ReciptsApiService,
    private fb: FormBuilder,
    private toaster: ToastService,
    private acitveRoute: ActivatedRoute,
    private loader: LoaderService) { }

  ngOnInit() {
    //  this.reciptJson = new ReciptModel();
  }
  ionViewWillEnter() {
    this.getVehicelBookings();
    this.getPaymentPurposes();
    this.getPaymentModes();
    this.acitveRoute.params.subscribe(data => {
      this.editReciptId = data.reciptId;
      if (this.editReciptId > -1) {
        this.isEdit = true;
        this.getRecipt(this.editReciptId);
      }
    });
  }

  getVehicelBookings() {
    this.reciptApi.getVehicleId().pipe().subscribe(
      success => {
        console.log('success', success);
        this.vehicleBookings = success;
      },
      failure => {
        console.log('failure', failure);
      });
  }

  getPaymentPurposes() {
    this.reciptApi.getpaymentDetails('PaymentPurpose').pipe().subscribe(
      success => {
        console.log('success', success);
        this.paymentPurposes = success;
      },
      failure => {
        console.log('failure', failure);
      });
  }

  getPaymentModes() {
    this.reciptApi.getpaymentDetails('PaymentMode').pipe().subscribe(
      success => {
        console.log('success', success);
        this.paymentModes = success;
      },
      failure => {
        console.log('failure', failure);
      }
    );

  }

  submit() {
    if (this.reciptForm.valid) {
      console.log('Rateform->', this.reciptForm.value);
      const req: any = this.reciptForm.value;
      // this.formRateJson(this.reciptForm.value);
      if (this.editReciptId > -1) {
        this.editRecipt(req);
        return;
      }
      this.saveRecipt(req);
    }
    else {
      this.toaster.danger('Fill all details');
      this.reciptForm.markAllAsTouched();
      this.reciptForm.updateValueAndValidity();
    }
  }

  saveRecipt(req) {
    this.loader.createLoader();
    req.refCreatedBy = 1;
    this.reciptApi.addRecipt(req).pipe().subscribe(success => {
      this.loader.dismissLoader();
      console.log('success', success);
      if (success[0].status === 1) {
        this.toaster.success(success[0].msg);
        this.reciptForm.reset();
        this.router.navigate(['booking-recipt']);
        return;
      }
      this.toaster.danger(success[0].msg);
    },
      failure => {
        this.loader.dismissLoader();
        console.log('failure', failure);
      });
  }

  editRecipt(req) {
    req.isActive = this.editReciptData.isActive;
    req.bookingReceiptId = Number(this.editReciptId);
    req.refModifiedBy = this.editReciptData.refModifiedBy;
    console.log('innn');
    this.loader.createLoader();

    this.reciptApi.editRecipt(this.editReciptId, req).pipe().subscribe(success => {
      this.loader.dismissLoader();
      console.log('success', success);
      if (success[0].status === 2) {
        this.toaster.success(success[0].msg);
        this.reciptForm.reset();
        this.router.navigate(['booking-receipt']);
        return;
      }
      this.toaster.danger(success[0].msg);
    },
      failure => {
        this.loader.dismissLoader();
        console.log('failure', failure);
      });
  }
  getRecipt(editId) {
    this.loader.createLoader();
    this.reciptApi.getRecipt(editId).subscribe(success => {
      this.loader.dismissLoader();
      console.log('success', success);
      this.editReciptData = success[0];
      this.setEditData();
    }, failure => {
      this.loader.dismissLoader();
      console.log('failure', failure);

    });
  }

  setEditData() {
    this.reciptForm.get('refBookingId').setValue(this.editReciptData.refBookingId);
    this.reciptForm.get('refReferenceListModeId').setValue(this.editReciptData.refReferenceListModeId);
    this.reciptForm.get('refReferenceListPayPurposeId').setValue(this.editReciptData.refReferenceListPayPurposeId);
    this.reciptForm.get('recipetDate').setValue(this.editReciptData.recipetDate);
    this.reciptForm.get('amount').setValue(this.editReciptData.amount);
    this.reciptForm.get('description').setValue(this.editReciptData.description);

  }


}
