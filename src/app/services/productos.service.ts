import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  private products = [
    {id: 1, nombre: "Mackbook Pro 2024", descripcion:"el ordenador para sobornar a la profe", colores: ["silver", "grey", "white"]},
    {id: 2, nombre: "Imac de 2017", descripcion:"el modelo de Imac que representa a Apple", colores: "grey"},
    {id: 3, nombre: "Iphone12", descripcion:"No hace falta tener el último Iphone para llamar a tus amigos", colores: ["yellow", "blue", "purple"]}
  ];

  constructor() { }

  getProducts(){
    return this.products;
  }

}
