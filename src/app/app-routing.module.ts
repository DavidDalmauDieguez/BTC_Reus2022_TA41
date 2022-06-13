import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InfoPersonajesComponent } from './info-personajes/info-personajes.component';
import { PersonajesComponent} from './personajes/personajes.component';
import { AddPersonajesComponent } from './add-personajes/add-personajes.component';

const routes: Routes = [
  { path: '', redirectTo: 'personajes', pathMatch: 'full'},
  { path: 'personajes', component: PersonajesComponent},
  { path: 'personajes/:id', component: InfoPersonajesComponent},
  { path: 'add', component: AddPersonajesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
