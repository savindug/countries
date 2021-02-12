export class Country {
    id!: number;
    name: string;
    region!: string;
    currency!: string;
    countryCode!: string;
    created_at!: string;
    updated_at!: string;

constructor(name: string, region: string, currency: string, countryCode: string){
    this.name = name;
    this.region = region;
    this.currency = currency;
    this.countryCode = countryCode;
}


}