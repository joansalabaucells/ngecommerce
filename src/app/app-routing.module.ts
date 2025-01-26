import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { HomeEcommerceComponent } from './templates/home-ecommerce/home-ecommerce.component';
import { InicioComponent } from './templates/inicio/inicio.component';
import { ContactoComponent } from './templates/contacto/contacto.component';
import { AboutComponent } from './templates/about/about.component';
//import { ServiciosComponent } from './templates/servicios/servicios.component';
//import { TareasComponent } from './templates/tareas/tareas.component';


const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'inicio', component: InicioComponent },
  { path: 'home-ecommerce', component: HomeEcommerceComponent},
  { path: 'contacto', component: ContactoComponent },
  { path: 'acerca', component: AboutComponent },
  //{ path: 'servicios', component: ServiciosComponent },
  //{ path: 'tareas', component: TareasComponent },
  //{ path: '', redirectTo: '/inicio', pathMatch: 'full' }, // Redirige a inicio por defecto "www.miapp.com"
  //{ path: '**', redirectTo: '/inicio', pathMatch: 'full' }, // Redirige a inicio por defecto "www.miapp.com" en todas las URL que no existan
  //{ path: 'home-recetas', component: HomeRecetasComponent }, // RUTA ESTÁTICA: Página principal de recetas
  //{ path: 'home-recetas/:id', component: RecetaComponent },  // RUTA DINÁMICA: Detalles de una receta específica
  
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
