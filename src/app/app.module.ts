import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RouterModule } from '@angular/router';

// Referencia de vistas
import { NavComponent } from "./Nav/nav.component";
import { HomeComponent } from "./Home/home.component";
import { HttpClientModule } from "@angular/common/http";
import { UsuarioComponent } from './Usuario/usuario.component'
import { UsuarioService } from './Services/usuario.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    UsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path:'', component: HomeComponent, pathMatch: 'full'},
      { path:'usuarios', component: UsuarioComponent }
    ])
  ],
  providers: [UsuarioComponent],
  bootstrap: [AppComponent]
})

export class AppModule { }
