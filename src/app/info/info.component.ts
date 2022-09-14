import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatosService } from '../datos.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  personaje: any = null;
  id: any = [];

  constructor(private datosService: DatosService, private activeRoute: ActivatedRoute) {
    this.id = parseInt(this.activeRoute.snapshot.paramMap.get('id') || '[]');
  }

  ngOnInit(): void {
    this.datosService.retornarPersonaje(this.id).subscribe(
      results => {
        this.personaje = results
      }
    );
  }

}
