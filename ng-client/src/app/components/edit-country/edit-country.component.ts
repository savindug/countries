import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Country } from 'src/app/models/country.model';

interface Region {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-edit-country',
  templateUrl: './edit-country.component.html',
  styleUrls: ['./edit-country.component.css']
})
export class EditCountryComponent implements OnInit {

  country!: Country;

  regions: Region[] = [
    {value: 'Africa', viewValue: 'Africa'},
    {value: 'Asia', viewValue: 'Asia'},
    {value: 'Caribbean', viewValue: 'Caribbean'},
    {value: 'Central America', viewValue: 'Central America'},
    {value: 'Europe', viewValue: 'Europe'},
    {value: 'North America', viewValue: 'North America'},
    {value: 'Oceania', viewValue: 'Oceania'},
    {value: 'South America', viewValue: 'South America'}
  ];

  formGroup: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    region: new FormControl('', [Validators.required]),
    currency: new FormControl('', [Validators.required]),
    c_code: new FormControl('', [Validators.required])
  });

  constructor(
    public dialogRef: MatDialogRef<EditCountryComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Country) {
      this.country = data;
    }

  ngOnInit(): void {
    this.formGroup.controls['name'].setValue(this.country.name);
    this.formGroup.controls['region'].setValue(this.country.region);
    this.formGroup.controls['currency'].setValue(this.country.currency);
    this.formGroup.controls['c_code'].setValue(this.country.countryCode);
  }

  onNoClick(): void {
    this.dialogRef.close(this.country);
  }

  updateCountry() {
    if(this.formGroup.valid){
      console.log('selected region ', this.formGroup.controls['region'].value)
        this.country = new Country(this.formGroup.controls['name'].value, this.formGroup.controls['region'].value, this.formGroup.controls['currency'].value, this.formGroup.controls['c_code'].value);
        this.onNoClick();
    }else{
      alert('Please Provide Required Details')
    }
  }



}
