import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' // Hace que el servicio esté disponible en toda la aplicación.
})
export class ProductosService { //Imprime por pantalla la lista de productos
  private products = [
    {id: 1, nombre: "Mackbook Pro 2024", descripcion:"el ordenador para sobornar a la profe", colores: ["silver", "grey", "white"]},
    {id: 2, nombre: "Imac de 2017", descripcion:"el modelo de Imac que representa a Apple", colores: "grey"},
    {id: 3, nombre: "Iphone12", descripcion:"No hace falta tener el último Iphone para llamar a tus amigos", colores: ["yellow", "blue", "purple"]},
    {id: 4, nombre: "Samsung S24", descripcion:"Samsung cantos redondos peque", colores: ["grey", "white","blue", "pink"]},
    {id: 5, nombre: "XP-Pen Artist 13.3 Pro Tableta Gráfica", descripcion:"Con pantalla", colores: ["black"]},
    {id: 6, nombre: "HyperX Cloud Stinger Auriculares Gaming", descripcion:"Unos auriculares al azar", colores: ["black"]},
    {id: 7, nombre: "PcCom Revolt 4070 Intel Core i9-14900HX/32GB/1TB SSD/RTX 4070/17.3", descripcion:"Portatil al azar", colores: ["black"]},
    {id: 8, nombre: "Taza personalizada para fans de los comics", descripcion:"Taza", colores: ["white"]},
    {id: 9, nombre: "Luz manos libres recargable", descripcion:"Luz", colores: ["black", "white"]},
    {id: 10, nombre: "Una chaqueta", descripcion:"Chaqueta de invierno", colores: ["black"]}    
  ];

  constructor() { }

  getProducts(){
    return this.products;
  }
  
  /*  A COPIAR PERO CON PRODUCTOS
  //Ejemplo find()
 numeroEncontrado(){
    return this.numeros.find(numero => numero > 5);
 }
  //Esto nos devuelve: 1. Pero si le ponemos un número mayor a 5, nos devolverá el primer número que sea mayor a 5, en este caso, 6.

 numerosEncontrado(){
  return this.numeros.filter(numero => numero > 5);
}

  //Esto nos devuelve: 1, 2, 3, 4. Pero si le ponemos un número mayor a 5, nos devolverá todos los que sean mayor a 5, en este caso, 6, 7, 8, 9, 10.

  getRecetas() {
    return this.recetas;
  }

  getRecetaById(id: number) {
    return this.recetas.find(receta => receta.id === id)
    //Nos sirve para BUSCAR y devolver el primer objeto de la lista de recetas que tenga el ID que le pasamos por parámetro. Siempre devuelve el primer elemento de un array, y siempre que cumpla una condición específica. Si no encuentra nada, devuelve undefined.
  }

  getRecetasByNombre(nombre: string) {
    // Buscar recetas que contengan el texto ingresado (case-insensitive)
    return this.recetas.filter((receta) =>
      receta.nombre.toLowerCase().includes(nombre.toLowerCase())
    //En caso de que receta.nombre en minúsculas, contenga el nombre en minúsculas que le pasamos por parámetro, nos devolverá un array con los elementos que cumplan esa condición.
    );
  }


  */ 
}
