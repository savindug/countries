import { serviceURI } from './../../../environments/environment';

import { Component, OnInit, ViewChild,  } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Country } from '../../models/country.model';
import { CountryService } from '../../services/country.service';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { AddCountryComponent } from '../add-country/add-country.component';
import { MatDialog } from '@angular/material/dialog';
import { EditCountryComponent } from '../edit-country/edit-country.component';

@Component({
  selector: 'app-countries-list',
  templateUrl: './countries-list.component.html',
  styleUrls: ['./countries-list.component.css']
})
export class CountriesListComponent implements OnInit {

  countries!: Country[];


  displayedColumns: string[] = ["select", "id", "name", "region", "currency", "countryCode", "updated_at", "actions"];
  dataSource = new MatTableDataSource<Country>();

  constructor(private countryService: CountryService, public dialog: MatDialog) { }

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator; 

  key!: string;

  ngOnInit(): void {
    this.getCountries();
  }

  getCountries = () => {
    this.countryService.getCountries().subscribe(_countries => {
      this.countries = _countries
      this.dataSource.data = this.countries;
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      console.log(JSON.stringify(this.countries))
    })
  }

  onToggle = (country: Country) => {
    alert(`Record selected => ${country.name}`)
  }

  applyFilter = () => {
    this.dataSource.filter = this.key.trim().toLowerCase();
  }

  openAdd(): void {
    const dialogRef = this.dialog.open(AddCountryComponent, {
      width: '500px',
      data: {}
    });


    dialogRef.afterClosed().subscribe(result => {
      this.addCountry(result);
    });
  }

  openEdit(country: Country): void {
    const dialogRef = this.dialog.open(EditCountryComponent, {
      width: '500px',
      data: country
    });


    dialogRef.afterClosed().subscribe(result => {
      this.updateCountry(result);
    });
  }

  updateCountry = (country: Country) => {
    this.countryService.updateCountry(country).subscribe(res => {
      if(res){
        alert(`Country Updated Successfully ${JSON.stringify(res)}`);
        this.ngOnInit();
      }else{
        console.log(res);
      }
    })
  }

  addCountry(country: Country) {
    this.countryService.addCountry(country).subscribe(res => {
      if(res){
        alert(`Country Added Successfully ${JSON.stringify(res)}`);
        this.ngOnInit();
      }else{
        console.log(res);
      }
    })
  }

  onDelete = (country: Country) => {
    if(confirm(`Are you sure you want to Delete\nRecord of ${country.name}?`)){
      this.countryService.deleteCountry(country.id).subscribe(_country => {
          alert(`Record of ${_country.name} has Deleted Successfully!`);
          this.ngOnInit();
      })
    }
  }

}
