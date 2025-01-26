import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TareasService {
  tareas = [
    { id: 1, nombre: 'Comprar leche', completada: false },
    { id: 2, nombre: 'Lavar el coche', completada: true },
    { id: 3, nombre: 'Preparar presentación', completada: false }
  ];

  getTareas() {
    return this.tareas;
  }

  deleteTarea(id: number) {
    this.tareas = this.tareas.filter(tarea => tarea.id !== id);
  }

  updateTarea(id: number, nuevaTarea: { nombre?: string, completada?: boolean }) {
    const index = this.tareas.findIndex(tarea => tarea.id === id);

    if (index !== -1) {
      this.tareas[index] = {
        ...this.tareas[index],
        ...nuevaTarea,
      };
    } else {
      console.error(`No se encontró la tarea con ID: ${id}`);
    }
  }
}
