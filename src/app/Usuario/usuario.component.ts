import { Component } from "@angular/core";
import { UsuarioService } from "../Services/usuario.service";
import { Usuario } from "./Usuario";
import { Ciudades } from "./Ciudades";
import { NgForm } from "@angular/forms";
import { stringify } from "@angular/compiler/src/util";

@Component({
    selector: 'usuario-form',
    templateUrl: './usuario.component.html',
    styleUrls: ['./usuario.component.css'],
    providers: [UsuarioService]
})

export class UsuarioComponent {
    public usuario: Usuario;
    public ciudades: Array<Ciudades>;
    public arr: any;
    public loadingshow: boolean;

    constructor(
        private _service: UsuarioService
    ) {
        this.loadingshow = false;
        this.usuario = new Usuario(0, "", "", "", "", "", "");
        this.ciudades = [            
        ];
        this.arr = [];
    }

    onSubmit(form: NgForm) {        
        try {
            this._service.addUsuario(this.usuario).subscribe(
                (response: any) => {
                    //console.log(response);                
                    if (response) {
                        alert("Se registró con éxito");                    
                        form.resetForm();
                    }
                    else {
                        alert("");
                    }
                },
                error =>{
                    if(!error.ok){
                        alert("Ha ocurrido un error, intentelo más tarde");
                    }
                }
            );
        }
        catch (ex) {
            console.log(ex.message);
        }
    }
    
    searchCityValue(busqueda: any) {
        this.loadingshow = true;
        var busq: string = busqueda.value;
        
        if(busq.length > 5) 
        {
            //console.log(busqueda.value);
            this.usuario.CiudadEstado = "";
            this.ciudades = [];

            this._service.getCiudades(busq).subscribe((response: any) => {
                //console.log(reponse);
                this.arr = response;    
                if(this.arr.geonames.length == 0){
                    this.ciudades = [
                    ];
                    this.loadingshow = false;
                }     
                else{                                      
                    var lg = this.arr.geonames.length;                    
                    for(var i = 0; i < lg; i++){
                        this.ciudades.push(                            
                            new Ciudades("", `${this.arr.geonames[i].name}, ${this.arr.geonames[i].adminName1}, ${this.arr.geonames[i].countryName}`)
                        );
                    }

                    this.loadingshow = false;
                }           
            }
            );
        }
        else if (busq === "") {
            this.ciudades = [
            ];
            this.usuario.CiudadEstado = "";
            this.loadingshow = false;
        }
        else {
            this.ciudades = [
            ];
            this.usuario.CiudadEstado = "";
            this.loadingshow = false;
        }        
        return;
    }
    

    // ngOnInit(){
    //     this._service.getCiudades('Cordoba,Veracruz').subscribe(arg => 
    //         {
    //             console.log(arg);
    //         }
    //         );

    // }    
}