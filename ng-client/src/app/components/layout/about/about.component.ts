import { Component, OnInit } from '@angular/core';

interface APIRouteData {
  method: string,
  route: string,
  desc: string,
  req: string,
  req_data: string,
  res: string,
}

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  panelOpenState = false;

  response_type = {
    name: "string",
    region: "string",
    currency: "string",
    countryCode: "string"
}

  apiRoutes: APIRouteData[] = [
    {method: 'GET', route: '/countries', desc: 'Get All Country Details', req: 'Parameter', req_data: 'null', res: `JSON objects array of ${JSON.stringify(this.response_type)}`},
    {method: 'GET', route: '/country/{id}', desc: 'Get Country Details by Id', req: 'Parameter', req_data: 'Country id: Integer', res: `JSON object of ${JSON.stringify(this.response_type)}`},
    {method: 'POST', route: '/country/{id}', desc: 'Add new Country Details', req: 'Parameter and Body', req_data: `JSON object of ${JSON.stringify(this.response_type)}`, res: `JSON object of ${JSON.stringify(this.response_type)}`},
    {method: 'PUT', route: '/country/{id}', desc: 'Update Country Details by id', req: 'Parameter and Body', req_data: `JSON object of ${JSON.stringify(this.response_type)}`, res: `JSON object of ${JSON.stringify(this.response_type)}`},
    {method: 'DELETE', route: '/country/{id}', desc: 'DELETE Country Details by id', req: 'Parameter', req_data: 'Country.id Integer', res: `HTTP status of successfull`},
  ]
  
  ngOnInit(): void {
  }

}
