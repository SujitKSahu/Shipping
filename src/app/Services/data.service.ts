import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(public httpClient: HttpClient) {}


  getAddress(pincode){
    return this.httpClient.get(`https://api.postalpincode.in/pincode/${pincode}`)
  }
}
