import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { PrivacidadComponent } from './privacidad/privacidad.component';
import { CondicionesComponent } from './condiciones/condiciones.component';
import { HttpClientModule } from '@angular/common/http';
import { PublicacionesComponent } from './publicaciones/publicaciones.component';
import { PublicacionComponent } from './publicaciones/publicacion/publicacion.component';

import { MiDatesDirective } from './mi-dates.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BlogComponent,
    PrivacidadComponent,
    CondicionesComponent,
    PublicacionesComponent,
    PublicacionComponent,
    MiDatesDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    NgbCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
