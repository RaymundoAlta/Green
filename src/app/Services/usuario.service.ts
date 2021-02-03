import { Injectable } from "@angular/core";
// import { Http, Response, Headers } from "@angular/http";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, ObservedValueOf } from "rxjs";
import { Usuario } from "../Usuario/Usuario";

@Injectable()
export class UsuarioService {
    public _urlgeonamesapi: string;
    public _urlusuariosapi: string;

    constructor(
        public http: HttpClient
    ) {
        //this._url = "http://localhost:55334/api/Usuarios/listaprueba"; weatherforecast
        //this._url = "http://api.geonames.org/searchJSON?p=Orizaba&username=wiki990";
        this._urlgeonamesapi = "http://api.geonames.org/searchJSON?username=wiki990&q=";
        this._urlusuariosapi = "http://localhost:55334/api/usuarios/"
    }

    getCiudades(cityname : string){
        //return this.http.get(this._urlgeonamesapi);
        return this.http.get(`${this._urlgeonamesapi},${cityname}`);
    }

    addUsuario(usuario: Usuario) : Observable<any>{
        // let json = JSON.stringify(usuario);
        // let params = "usuario="+json;
        // let headers = new HttpHeaders().set('Content-Type','application/json; charset=utf-8');
         
        return this.http.post<any>(this._urlusuariosapi, usuario, {
            headers: new HttpHeaders({
            "Content-Type": 'application/json',
            })
        });    
    }  
           
}