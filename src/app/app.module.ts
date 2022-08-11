import { NgModule,CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA,Injector } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { SplashScreen } from '@awesome-cordova-plugins/splash-screen/ngx';
import { StatusBar } from '@awesome-cordova-plugins/status-bar/ngx';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormBuilder, Validators,ReactiveFormsModule,FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AlertService } from './services/alert/alert.service';
import { ApiService } from './services/api/api.service';
import { ReciptsApiService } from 'src/app/services/booking-recipt/recipt-api.service';
import { HomeApiService } from './services/home/home-api.service';
import { LoaderService } from './services/loader/loader.service';
import { LocalStorageService } from './services/local-storage/local-storage.service';
import { LrApiService } from './services/lr/lr-api.service';
import { RateApiService } from './services/rate-card/rate-api.service';
import { ToastService } from './services/toast/toast.service';
import { VehicleDetailsapiService } from './services/vehicle-details/vehicle-details.service';
import { PaymentsApiService } from './services/booking-payments/payments-api.service';
import { ReferenceApiService } from './services/reference/reference-api.service';
import { EmployeeApiService } from './services/employee/employee-api.service';
import { MyProfileApiService } from './services/my-profile/my-profile.service';
import { LoginApiService } from './services/login/login-api.service';
import {
  NativeGeocoder,
  NativeGeocoderResult,
  NativeGeocoderOptions,
} from '@awesome-cordova-plugins/native-geocoder/ngx';
import {
  Geolocation,
  Geoposition,
} from '@awesome-cordova-plugins/geolocation/ngx';


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    SplashScreen,
    StatusBar,
    ToastService,
    FormBuilder,
    NativeGeocoder,
    Validators,
    RateApiService,
    LoaderService,
    ReciptsApiService,
    AlertService,
    Geolocation,
    ApiService,
    HomeApiService,
    LocalStorageService,
    LrApiService,
    VehicleDetailsapiService,
    PaymentsApiService,
    ReferenceApiService,
    EmployeeApiService,
    MyProfileApiService,
    LoginApiService
  ],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA ]
})
export class AppModule {}
