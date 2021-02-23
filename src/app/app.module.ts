import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListaComprasComponent } from './components/lista-compras/lista-compras.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent, ListaComprasComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
