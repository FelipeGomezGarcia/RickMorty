import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonajesComponent } from './personajes/personajes.component';
import { AboutComponent } from './about/about.component';

import{HttpClientModule} from '@angular/common/http';
import { InicioComponent } from './inicio/inicio.component';
import { InfoComponent } from './info/info.component';
import { AddPersonajeComponent } from './add-personaje/add-personaje.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PersonajesComponent,
    AboutComponent,
    InicioComponent,
    InfoComponent,
    AddPersonajeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
