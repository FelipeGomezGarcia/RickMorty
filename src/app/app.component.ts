import { Component } from '@angular/core';
import { Personaje } from './models/personaje.model';
import { PersonajeService } from './services/personaje.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RickMorty';

  personajes:any=null;
  currentPersonaje:Personaje={};
  currentIndex = -1;
  name = '';

  constructor(private datosService: PersonajeService) { }

  searchPersonaje():void{
    this.currentPersonaje = {};
    this.currentIndex = -1;

    this.datosService.findByName(this.name)
    .subscribe(
      data =>{
        this.personajes = data;
      },
      error =>{
        console.log(error);
      }
    )
  }
}
