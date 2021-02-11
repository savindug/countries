import { CountryService } from './../../services/country.service';
import { Country } from './../../models/country.model';
import { Component, OnInit,  } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-countries-list',
  templateUrl: './countries-list.component.html',
  styleUrls: ['./countries-list.component.css']
})
export class CountriesListComponent implements OnInit {

  countries!: Country[];

  displayedColumns: string[] = ["id", "name", "region", "currency", "countryCode", "updated_at", "actions"];
  dataSource = new MatTableDataSource<Country>();

  constructor(private countryService: CountryService) { }


  ngOnInit(): void {
    this.countryService.getCountries().subscribe(_countries => {
      this.countries = _countries
      this.dataSource.data = this.countries;
      console.log(JSON.stringify(this.countries))
    })
  }

  getCountries = () => {
    this.countryService.getCountries().subscribe(_countries => {
      this.countries = _countries
      this.dataSource.data = this.countries;
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
