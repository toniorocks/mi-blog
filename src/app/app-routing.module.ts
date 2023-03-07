import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CondicionesComponent } from './condiciones/condiciones.component';
import { HomeComponent } from './home/home.component';
import { PrivacidadComponent } from './privacidad/privacidad.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'privacidad', component: PrivacidadComponent },
  { path: 'condiciones', component: CondicionesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
