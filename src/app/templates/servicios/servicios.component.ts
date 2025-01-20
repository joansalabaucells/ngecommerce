import { Component, OnInit } from '@angular/core';
import { RecetasService } from 'src/app/services/recetas.service';
import { ModooscuroService } from 'src/app/services/modooscuro.service';


@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent implements OnInit {

/* Los servicios en Angular son clases que permiten compartir lógica y datos entre componentes, ideal para la reutilización del código y la separación de responsabilidades.
Se usan para...
  - Acceso a datos (APIs, bases de datos).
  - Lógica empresarial reutilizable.
  - Almacenamiento de estados compartidos entre componentes.

¿Cómo creamos un servicio?

  - ng generate service nombre-del-servicio
  - ng g s ruta/nombre-del-servicio


*/

recetas: any[] = [];
//2. A través de two way binding se almacema un valor number en recetaId
recetaId: number | null = null; // ID ingresado por el usuario
receta: { id: number; nombre: string } | undefined; // Receta encontrada
mensajeError: string | null = null; // Mensaje de error si no se encuentra una receta
//2-2. A través de two way binding se almacema un valor string en nombreeReceta
nombreReceta: string = ''; // Texto ingresado por el usuario
recetasEncontradas: { id: number; nombre: string }[] = []; // Lista de recetas encontradas

/*   El constructor es una función especial en la clase de TypeScript que se ejecuta al crear una instancia de la clase (en este caso, del componente).
Características:
  - Se utiliza para inicializar propiedades de la clase y para la inyección de dependencias.
  - Se ejecuta antes de que Angular termine de configurar el componente.
  - Se utiliza para inyectar servicios o dependencias, y asignar valores iniciales simples que no dependan de la interacción con el DOM o de datos externos. */
constructor(private recetasService: RecetasService, private modooscuro: ModooscuroService) {}
//Todos los servicios que se inyectan en un componente deben ser declarados en el mismo constructor del componente. Solo tendremos un constructor en un componente.

/* El ngOnInit es un método del ciclo de vida del componente en Angular que pertenece a la interfaz OnInit.
Características:
  - Es un método de Angular que se llama después de que Angular inicialice el componente y todas sus propiedades vinculadas estén listas.
  - Se utiliza para realizar tareas de inicialización relacionadas con el componente.
  - Es el lugar recomendado para poner lógica que requiera:
      · Interacción con el DOM.
      · Datos provenientes de servicios externos.
    · Suscripciones iniciales.
Se utiliza para:
  - Inicializar datos que provienen de servicios o API.
  - Configurar variables que dependan de propiedades del componente que ya estén listas.
  - Configurar suscripciones. */

ngOnInit() {
  this.recetas = this.recetasService.getRecetas();
}

buscarReceta() {
  // 4. Se busca la receta por ID utilizando el servicio
  if (this.recetaId !== null) {
    this.receta = this.recetasService.getRecetaById(this.recetaId);

    // Si no se encuentra la receta, tenemos que mostrar un mensaje de error
    if (!this.receta) {
      this.mensajeError = `No se encontró ninguna receta con el ID ${this.recetaId}.`;
      this.receta = undefined; // Limpiar cualquier resultado previo
    } else {
      this.mensajeError = null; // Limpiar el error si se encuentra una receta
    }
  }
}

buscarRecetasNombre() {
  // 4-2. Ya existe un valor para nombrereceta. Al desencadenar el método se busca la receta por ID utilizando el servicio
  if (this.nombreReceta.trim()) {
    //trim(): No modifica la cadena original, devuelve una nueva cadena sin espacios iniciales ni finales.

    this.recetasEncontradas = this.recetasService.getRecetasByNombre(this.nombreReceta);
  //--> Este método devuelve un array con TODAS las recetas que contienen el texto ingresado por el usuario.
    // Si no se encuentran recetas, mostrar un mensaje de error
    if (this.recetasEncontradas.length === 0) {
      this.mensajeError = `No se encontraron recetas que coincidan con "${this.nombreReceta}".`;
    } else {
      this.mensajeError = null; // Limpiar el error si se encuentran recetas
    }
  } else {
    this.mensajeError = 'Por favor, ingresa un nombre válido.';
    this.recetasEncontradas = [];
  }
}


}
