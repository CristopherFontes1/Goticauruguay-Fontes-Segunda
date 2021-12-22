import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistroComponent } from './Components/registro/registro.component';
import { LoginComponent } from './Components/login/login.component';
import { ListadoComponent } from './Components/listado/listado.component';
import { InfoComponent } from './Components/info/info.component';
import { CarritoComponent } from './Components/carrito/carrito.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';
import { LayoutComponent } from './Components/layout/layout.component';


@NgModule({
  declarations: [
    AppComponent,
    RegistroComponent,
    LoginComponent,
    ListadoComponent,
    InfoComponent,
    CarritoComponent,
    HeaderComponent,
    FooterComponent,
    PageNotFoundComponent,
    LayoutComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
