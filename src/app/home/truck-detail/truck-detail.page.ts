import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {
  Geolocation,
  Geoposition,
} from '@awesome-cordova-plugins/geolocation/ngx';
import { GoogleMap } from '@capacitor/google-maps';
import { Platform } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import * as Leaflet from 'leaflet';
import {
  NativeGeocoder,
  NativeGeocoderResult,
  NativeGeocoderOptions,
} from '@awesome-cordova-plugins/native-geocoder/ngx';
import { AlertService } from 'src/app/services/alert/alert.service';
import { HomeApiService } from 'src/app/services/home/home-api.service';
import { LoaderService } from 'src/app/services/loader/loader.service';

declare let google;

@Component({
  selector: 'app-truck-detail',
  templateUrl: './truck-detail.page.html',
  styleUrls: ['./truck-detail.page.scss'],
})
export class TruckDetailPage implements OnInit {
  @ViewChild('trackingMap', { static: false }) mapElement: ElementRef;

  vehicles: any = [];
  // bookingId: number;
  location: string;
  polId;

  trackingMap: GoogleMap;
  map: any;
  lMap: Leaflet.Map;
  options: NativeGeocoderOptions = {
    useLocale: true,
    maxResults: 5,
  };
  vehicleLatLongs = [];
  private sub: any;

  constructor(
    private platform: Platform,
    private homeService: HomeApiService,
    private aRoute: ActivatedRoute,
    private loader: LoaderService,
    private geoLocation: Geolocation,
    private alert: AlertService,
    private nativeGeocoder: NativeGeocoder
  ) {}

  async ngOnInit() {}

  ionViewDidEnter() {
    console.log('tracking');

    this.sub = this.aRoute.params.subscribe((param) => {
      // this.bookingId = Number(param['bookingId']);
      this.location = param.latlong;
      this.polId = Number(param.polId);
    });
    this.getNearByTrucks(this.location);
  }

  loadMap() {
    let lpickUpLatLong = [];
    lpickUpLatLong = this.splitLatLong(this.location);
    console.log(this.vehicles);

    const customertIcon = Leaflet.icon({
      iconUrl: '/assets/images/pin.png',
      iconSize: [40, 40],
    });
    const lorryIcon = Leaflet.icon({
      iconUrl: '/assets/images/Truck-icon.png',
      iconSize: [26, 26],
    });
    this.map = Leaflet.map('trackingMap', {
      center: [lpickUpLatLong[0], lpickUpLatLong[1]],
      zoom: 18,
      // layers: [Layer]
    });
    let marker;

    this.vehicleLatLongs.forEach((element) => {
      marker = Leaflet.marker([element[0], element[1]], { icon: lorryIcon })
        .addTo(this.map)
        .bindPopup(element[2])
        .openPopup();
    });

    marker = Leaflet.marker([lpickUpLatLong[0], lpickUpLatLong[1]], {
      icon: customertIcon,
    })
      .addTo(this.map)
      .bindPopup('Customer PickUp Spot.')
      .openPopup();
    Leaflet.tileLayer(
      'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
    ).addTo(this.map); // This line is added to add the Tile Layer to our map
  }

  getNearByTrucks(source) {
    this.loader.createLoader();
    this.homeService
      .getnearByVehicles(this.location)
      .pipe()
      .subscribe(
        (success) => {
          this.loader.dismissLoader();
          console.log('sucess', success);
          this.vehicles = success;
          let latLong = [];
          this.vehicles.forEach((element) => {
            latLong = this.splitLatLong(element.currentLocation);
            this.vehicleLatLongs.push([
              parseFloat(latLong[0]),
              parseFloat(latLong[1]),
              element.transporterName,
            ]);
            this.getAddressFromLatLong(
              parseFloat(latLong[0]),
              parseFloat(latLong[1])
            ).then((data: string) => {
              console.log(data);
              element.address4 = data;
            });
            // console.log(address);
            // element.address4 = address;
          });
          this.platform.ready().then(() => this.loadMap());
        },
        (failure) => {
          this.loader.dismissLoader();
          console.log('failure ', failure);
        }
      );
  }

  sendMsg(vehicleId) {
    this.alert.alertPromt(`Send Enquiry ? `).then((data) => {
      if (Boolean(data)) {
        const req = {
          refOrgId: 3,
          refPOLBookingMappingId: this.polId,
          refVehicleId: vehicleId,
          refCreatedBy: 1,
        };
        this.homeService.sendMsgToVehicle(req).subscribe(
          (success) => {
            console.log('done', success);
          },
          (failure) => {
            console.log('fail', failure);
          }
        );
      }
    });
  }
  splitLatLong(location) {
    let latLong = [];
    if (location.includes(',')) {
      latLong = location.split(',');
    }
    return latLong;
  }
  getAddressFromLatLong(lat, long) {
    // var address = '';
    return new Promise((resolve) => {
      this.nativeGeocoder
        .reverseGeocode(lat, long, this.options)
        .then((result: NativeGeocoderResult[]) => {
          // console.log(result[0], result[0].subAdministrativeArea)
          resolve(result[0].subAdministrativeArea);
          // console.log(address);
        })
        .catch((error: any) => console.log(error));
    });
    // console.log(address);

    // return address;
  }
}
