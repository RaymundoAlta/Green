import { Injectable } from "@angular/core";
// import { Http, Response, Headers } from "@angular/http";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class UsuarioService{
    public _url: string;
    constructor(
        public http: HttpClient        
    )
    {
        this._url = "http://api.geonames.org/searchJSON?p=Orizaba&username=wiki990";
    }

    getCiudades(): Observable<any>{
        return this.http.get(this._url);
    }
}