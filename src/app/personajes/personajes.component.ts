import { Component} from '@angular/core';
import { DatosService } from "../datos.service";

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent{

  personajes:any=null;

  constructor(private datosService: DatosService) { }

  ngOnInit(){
    this.datosService.retornar().subscribe(
      results => {this.personajes = results
      }
    );
  }


}
