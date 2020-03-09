import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { DataService } from './Services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Shipping';
  AddressForm: FormGroup;

  constructor(
    private fb:FormBuilder,
    public dataService: DataService
    ){}

  ngOnInit(){
    this.AddressForm = this.fb.group({
      fname:'',
      lname:'',
      pincode:'',
      Address:'',
      postOffice:'',
      city:'',
      state:'',
      country:''
    });
  }

     
  NewAddress(){
    this.dataService.getAddress(this.AddressForm.get('pincode').value)
    .subscribe(data =>{
      console.log(data[0].PostOffice[0]);
      if(data[0].Status === 'Error'){
        alert("Please check your pincode")
      }

      const address = data[0].PostOffice[0];

      this.AddressForm.get('Address').setValue(address.Name);
      this.AddressForm.get('postOffice').setValue(address.Block);
      this.AddressForm.get('city').setValue(address.District);
      this.AddressForm.get('state').setValue(address.State);
      this.AddressForm.get('country').setValue(address.Country);
    });
  }

}
