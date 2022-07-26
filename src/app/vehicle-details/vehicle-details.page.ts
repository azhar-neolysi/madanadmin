
import { Component, OnInit } from '@angular/core';
import { AlertService } from '../services/alert/alert.service';
import { LoaderService } from '../services/loader/loader.service';
import { ToastService } from '../services/toast/toast.service';
import { VehicleDetailsapiService } from '../services/vehicle-details/vehicle-details.service';


@Component({
  selector: 'app-vehicle-details',
  templateUrl: './vehicle-details.page.html',
  styleUrls: ['./vehicle-details.page.scss'],
})
export class VehicleDetailsPage implements OnInit {

  vehiclesList: any = [];
  referenceListId: number;
  bookingMappingJson = {
    refOrgId: 3,
    refPOLBookingMappingId: 0,
    refVehicleId: 0,
    refVehicleBookingEnqResponseId: 0,
    refCreatedBy: null,
    refModifiedby: null,
    refRateID: 0
  };
  constructor(private vehicleDetailsApi: VehicleDetailsapiService,
    private loader: LoaderService,
    private alert: AlertService,
    private toast: ToastService) { }

  ngOnInit() { }

  ionViewWillEnter() {
    this.getWillingTruck();
  }

  getWillingTruck() {
    this.loader.createLoader();
    this.vehicleDetailsApi.getWillingVehicles().pipe().subscribe(success => {
      console.log('success', success);
      this.vehiclesList = success;
      this.loader.dismissLoader();
    },
      failure => {
        this.loader.dismissLoader();
        console.log('failure', failure);
      });
  }
  getTranspoterRate() {
    this.vehicleDetailsApi.getTrasnpoterRate().subscribe(success => {
      console.log('transpoterSuccess', success);
      this.referenceListId = success[0].referenceListId;
    }, failure => { });
  }
  confirm(polId, refVehicle, enqResId) {
    let sourceIdByRate;
    let destiantionIdByRate;
    this.alert.alertPromt(`Send confirmation ? `).then(data => {
      if (Boolean(data)) {
        this.getTranspoterRate();
        this.vehicleDetailsApi.getPolById(polId).subscribe((success: any) => {
          this.loader.createLoader();
          console.log('success', success);
          this.vehicleDetailsApi.getRateById(success.refRateId).subscribe(success1 => {
            console.log('rateSuccess', success1[0]);
            sourceIdByRate = success[0].refSourceReferenceList;
            destiantionIdByRate = success[0].refDestinationReferenceList;
            this.vehicleDetailsApi.getSpecificRate(this.referenceListId, sourceIdByRate, destiantionIdByRate).subscribe(success2 => {
              this.loader.dismissLoader();
              console.log('specificsuceess', success2);
              this.bookingMappingJson.refRateID = success[0].rateId;
              this.bookingMappingJson.refPOLBookingMappingId = polId;
              this.bookingMappingJson.refVehicleId = refVehicle;
              this.bookingMappingJson.refVehicleBookingEnqResponseId = enqResId;
              this.vehicleDetailsApi.addVehicleBookingMapping(this.bookingMappingJson).subscribe(success3 => {
                console.log('added', success3);
                this.ionViewWillEnter();
              }, failure => { this.loader.dismissLoader(); this.toast.danger('not added' + failure); });

            },
              failure => { this.loader.dismissLoader(); this.toast.danger(failure); });
          }, failure => { this.loader.dismissLoader(); this.toast.danger(failure); });
        }, failure => { this.loader.dismissLoader(); this.toast.danger(failure); });


      }
    });
  }
}
