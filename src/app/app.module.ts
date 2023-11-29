import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { PrivacidadComponent } from './privacidad/privacidad.component';
import { CondicionesComponent } from './condiciones/condiciones.component';
import { PublicacionesComponent } from './publicaciones/publicaciones.component';
import { PublicacionComponent } from './publicaciones/publicacion/publicacion.component';

import { MiDatesDirective } from './mi-dates.directive';
import { appReducers } from './app.reducer';
import { LoadingComponent } from './_helpers/loading/loading.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BlogComponent,
    PrivacidadComponent,
    CondicionesComponent,
    PublicacionesComponent,
    PublicacionComponent,
    MiDatesDirective,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    NgbCarouselModule,
    StoreModule.forRoot(appReducers),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: false,
      autoPause: true,
      features: {
        pause: false,
        lock: true,
        persist: true
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
