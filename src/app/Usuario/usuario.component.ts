import { Component } from "@angular/core";
import { UsuarioService } from "../Services/usuario.service";

@Component({
    selector: 'usuario-form',
    templateUrl: './usuario.component.html',
    providers: [UsuarioService]
})

export class UsuarioComponent{
    constructor(
        private _service : UsuarioService
    )
    {}

    ngOnInit(){
        this._service.getCiudades().subscribe(
            result => {
                if (result.code != 200){
                    console.log(result);
                }
                else{
                    console.log(result.data);
                }
            },
            error => {
                console.log(<any>error);
            }
        );
    }
}