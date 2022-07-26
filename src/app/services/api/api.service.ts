import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl = environment.url;
  constructor(private http: HttpClient) { }
  get(url) {
    console.log(this.baseUrl);
    // console.log(environment.server);
    console.log(url);
    console.log(this.baseUrl + url);

    return this.http.get(this.baseUrl + url);
  }
  post(url, request) {
    return this.http.post(this.baseUrl + url, request);
  }
  put(url, request) {
    return this.http.put(this.baseUrl + url, request);
  }
  delete(url, request) {
    console.log('delete', url, request);
    return this.http.delete(this.baseUrl + url, request);
  }
  formUrl(...urls) {
    return urls.join('/');
  }
}

