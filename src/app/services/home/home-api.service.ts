import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';

@Injectable({
  providedIn: 'root'
})
export class HomeApiService {

  constructor(private api: ApiService) { }

  getICData() {
    return this.api.get('BookingFlowReports/getAdminDashboard');
  }
  getFindTruck(source) {
    return this.api.get('BookingFlowReports/getAdminFindTruck/?Location=' + source);
  }
  sendMsgToVehicle(req) {
    return this.api.post('VehicleBookingEnqResponse', req);
  }

  getnearByVehicles(location) {
    return this.api.get('Vehicle/GetNearbyVehicle/?FromLocation=' + location);
  }

}
