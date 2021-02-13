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
<<<<<<< HEAD
=======
import { MatSnackBar } from '@angular/material/snack-bar';
>>>>>>> ng-client

@Component({
  selector: 'app-countries-list',
  templateUrl: './countries-list.component.html',
  styleUrls: ['./countries-list.component.css']
})
export class CountriesListComponent implements OnInit {

  countries!: Country[];


  displayedColumns: string[] = ["select", "id", "name", "region", "currency", "countryCode", "updated_at", "actions"];
  dataSource = new MatTableDataSource<Country>();

<<<<<<< HEAD
  constructor(private countryService: CountryService, public dialog: MatDialog) { }
=======
  constructor(private countryService: CountryService, public dialog: MatDialog, private _snackBar: MatSnackBar) { }
>>>>>>> ng-client

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
<<<<<<< HEAD
    })
=======
    });

    if(this.dataSource == null || this.countries != null) {
      this.openSnackBar('No Data Found', '');
    }

  }

  setClasses = () => {
    let classes = {
      'hide': !(this.dataSource!=null && this.dataSource.data.length==0)
    }

    return classes
>>>>>>> ng-client
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
<<<<<<< HEAD
      if(JSON.stringify(country) === JSON.stringify(result)){
        console.log('Records not updated');
      }else{
        this.updateCountry(result);
=======
      if(result != null){
        this.updateCountry(result);
      }else{
        console.log(`Records not updated ${JSON.stringify(country)} === ${JSON.stringify(result)}`); 
>>>>>>> ng-client
      }
    });
  }

  updateCountry = (country: Country) => {
<<<<<<< HEAD
    this.countryService.updateCountry(country).subscribe(res => {
      if(res){
        alert(`Country Updated Successfully ${JSON.stringify(res)}`);
        this.ngOnInit();
=======
    console.log("updateCountry()")
    this.countryService.updateCountry(country).subscribe(res => {
      if(res){
        this.ngOnInit();
        this.openSnackBar(`Country Updated Successfully`, res.name);
>>>>>>> ng-client
      }else{
        console.log(res);
      }
    })
  }

  addCountry(country: Country) {
    this.countryService.addCountry(country).subscribe(res => {
      if(res){
<<<<<<< HEAD
        alert(`Country Added Successfully ${JSON.stringify(res)}`);
        this.ngOnInit();
=======
        this.ngOnInit();
        this.openSnackBar('Country Added Successfully', country.name);

>>>>>>> ng-client
      }else{
        console.log(res);
      }
    })
  }

  onDelete = (country: Country) => {
    if(confirm(`Are you sure you want to Delete\nRecord of ${country.name}?`)){
<<<<<<< HEAD
      this.countryService.deleteCountry(country.id).subscribe(_country => {
          alert(`Record of ${_country.name} has Deleted Successfully!`);
          this.ngOnInit();
=======
      this.countryService.deleteCountry(country.id).subscribe(_country => {    
          this.ngOnInit();
          this.openSnackBar(`Record Deleted Successfully!`, _country.name );
>>>>>>> ng-client
      })
    }
  }

<<<<<<< HEAD
=======
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }

>>>>>>> ng-client
}
