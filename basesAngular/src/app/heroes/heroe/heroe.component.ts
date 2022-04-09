import { Component } from '@angular/core';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.scss']
})
export class HeroeComponent{

  #nombre: string = "Aquaman";
  #edad:number=500;
  #poderes: string[] = ["Volar", "Superfuerza", "Agilidad"];


  get getNombre(): string {
    return this.#nombre;
  }

  get getEdad(): number {
    return this.#edad;
  }

  get getPoderes(): string[] {
    return this.#poderes;
  }

}
