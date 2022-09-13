import { Component} from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent{

  personajes:any=null;

  constructor(private http: HttpClient) { }

  ngOnInit(){
    this.http.get("https://rickandmortyapi.com/api/character/1,2,3,4,5,6,7,8")
    .subscribe(result=>{this.personajes = result});
  }

}
