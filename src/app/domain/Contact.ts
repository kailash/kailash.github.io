export class Contact{
    name:string;
    phone:string;
    city:string;
    place:string;
    email:string;
    download:string;
    desg:string;

    constructor(phone:string,city:string,place:string,email:string,download:string,name:string,desg:string){
        this.phone=phone;
        this.city=city;
        this.place=place;
        this.email=email;
        this.download=download;
        this.name=name;
        this.desg=desg;
    }
}