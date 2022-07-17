import { Component } from "@angular/core";

@Component({
  selector: 'app-heroe',
  templateUrl: 'heroe.component.html'
})
export class HeroeComponent{
  nombre: string = 'Ironman';
  edad: number = 27;


  get nombreCapitalizado():string{
  return this.nombre.toUpperCase();
  }

  obtenerNombre(): string{
    return `${this.nombre} - ${this.edad}`;
  }

  cambiarNombre():void{
    this.nombre = 'Red Omega';
  }

  cambiarEdad():void{
    this.edad = 30;
  }
}
