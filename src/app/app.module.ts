import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeEcommerceComponent } from './templates/home-ecommerce/home-ecommerce.component';
import { HeaderComponent } from './components/header/header.component';
import { ContactoComponent } from './templates/contacto/contacto.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeEcommerceComponent,
    HeaderComponent,
    ContactoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
