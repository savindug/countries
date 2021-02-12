import { CountryService } from './../../services/country.service';
import { Country } from './../../models/country.model';
import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-country',
  templateUrl: './add-country.component.html',
  styleUrls: ['./add-country.component.css']
})
export class AddCountryComponent {

  country!: Country;

  formGroup: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    region: new FormControl('', [Validators.required]),
    currency: new FormControl('', [Validators.required]),
    c_code: new FormControl('', [Validators.required])
  });

  constructor(
    public dialogRef: MatDialogRef<AddCountryComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Country) {
      
    }

  onNoClick(): void {
    this.dialogRef.close(this.country);
  }

  addCountry() {
    if(this.formGroup.valid){
        this.country = new Country(this.formGroup.controls['name'].value, this.formGroup.controls['region'].value, this.formGroup.controls['currency'].value, this.formGroup.controls['c_code'].value);
        this.onNoClick();
    }else{
      alert('Please Provide Required Details')
    }
  }



}

