import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { HomeEcommerceComponent } from './templates/home-ecommerce/home-ecommerce.component';

const routes: Routes = [
  {path: 'home-ecommerce', component: HomeEcommerceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
