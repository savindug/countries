export class Country {
    id!: number;
    name: string;
    region!: string;
    currency!: string;
    countryCode!: number;
    created_at!: string;
    updated_at!: string;

constructor(name: string){
    this.name = name;
}


}