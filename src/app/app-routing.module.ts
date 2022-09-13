import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { PersonajesComponent } from './personajes/personajes.component';
import { InicioComponent } from './inicio/inicio.component';

const routes: Routes = [
  {
    path: 'personajes',
    component: PersonajesComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: '',
    component: InicioComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
