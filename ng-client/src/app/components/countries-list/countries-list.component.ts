import { CountryService } from './../../services/country.service';
import { Country } from './../../models/country.model';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-countries-list',
  templateUrl: './countries-list.component.html',
  styleUrls: ['./countries-list.component.css']
})
export class CountriesListComponent implements OnInit {

  @Input()
  countries!: Country[];


  constructor(private countryService: CountryService) { }

  ngOnInit(): void {
    this.getCountries()
  }

  getCountries = () => {
    this.countryService.getCountries().subscribe(_countries => {
      this.countries = _countries
      console.log(JSON.stringify(this.countries))
    })
  }

  // onUpdate = (country: Country) => {
  //     this.updateCountry.emit(country);
  // }

  // onDelete = (country: Country) => {
  //   this.deleteCountry.emit(country);
  // }

}
