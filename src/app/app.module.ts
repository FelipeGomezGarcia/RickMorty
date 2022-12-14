import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonajesComponent } from './personajes/personajes.component';
import { AboutComponent } from './about/about.component';

import{HttpClientModule} from '@angular/common/http';
import { InicioComponent } from './inicio/inicio.component';
import { InfoComponent } from './info/info.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonajesComponent,
    AboutComponent,
    InicioComponent,
    InfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
