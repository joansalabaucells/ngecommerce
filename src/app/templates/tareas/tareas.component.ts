import { Component, OnInit } from '@angular/core';
import { TareasService } from 'src/app/services/tareas.service';


@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent implements OnInit{
  tareas: { id: number; nombre: string; completada: boolean }[] = [];
  nuevaTarea: string = '';

  constructor(private tareasService: TareasService) {}

  ngOnInit() {
    // Cargar la lista inicial de tareas
    this.tareas = this.tareasService.getTareas();
  }

  agregarTarea() {
    if (this.nuevaTarea.trim()) {
      const nueva = {
        id: Date.now(), // Generamos un ID único basado en la fecha actual
        nombre: this.nuevaTarea,
        completada: false
      };
      this.tareasService.tareas.push(nueva); // Añadimos la tarea al servicio
      this.tareas = this.tareasService.getTareas(); // Actualizamos la lista en la vista
      this.nuevaTarea = ''; // Limpiamos el campo de entrada
    }
  }

  eliminarTarea(id: number) {
    this.tareasService.deleteTarea(id); // Eliminamos la tarea del servicio
    this.tareas = this.tareasService.getTareas(); // Actualizamos la lista en la vista
  }

  actualizarTarea(id: number) {
    const nuevaInfo = { completada: true }; // Marcamos la tarea como completada
    this.tareasService.updateTarea(id, nuevaInfo); // Actualizamos la tarea
    this.tareas = this.tareasService.getTareas(); // Actualizamos la lista en la vista
  }
}
  

