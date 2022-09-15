import { Component} from '@angular/core';
import { DatosService } from "../datos.service";
import { Personaje } from '../models/personaje.model';
import { PersonajeService } from '../services/personaje.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent{

  personajes:any=null;
  currentPersonaje:Personaje={};
  currentIndex = -1;
  name = '';

  constructor(private datosService: PersonajeService) { }

  ngOnInit(){
    this.loadList();
  }

  loadList():void{
    this.datosService.getAll().subscribe(
      results => {this.personajes = results
      }
    );
  }

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
