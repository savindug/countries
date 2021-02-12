import { serviceURI } from './../../environments/environment';
import { Country } from './../models/country.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(private http: HttpClient) { }

  getCountries = ():Observable<Country[]> => {
    return this.http.get<Country[]>(`${serviceURI}countries`, httpOptions);
  }

  getCountry = (id: number) : Observable <Country> => {
    return this.http.get<Country> (`${serviceURI}country/${id}`, httpOptions);
  }

  addCountry = (country: Country) : Observable <Country> => {
    return this.http.post<Country> (`${serviceURI}country`, country, httpOptions);
  }

  updateCountry = (country: Country) : Observable <Country> => {
    console.log(`${serviceURI}/country/${country.id}`);
    return this.http.put<Country> (`${serviceURI}country/${country.id}`, country, httpOptions);
  } 

  deleteCountry = (id: number) : Observable <Country> => {
    return this.http.delete<Country> (`${serviceURI}country/${id}`, httpOptions);
  }
   
}
