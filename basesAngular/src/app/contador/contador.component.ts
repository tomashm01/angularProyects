import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  template: `
    <h1>{{ title }}</h1>
    <h2>La base es: {{ base }}</h2>
    <h2>Numero de clicks: {{ contadorClicks }}</h2>
    <button (click)="calcularClicks(base)">+{{ base }}</button>
    <button (click)="calcularClicks(-base)">-{{ base }}</button>
  `,
  styleUrls: ['../app.component.scss'],
})

export class ContadorComponent {
  title: string = 'Contador app';
  contadorClicks: number = 0;
  base: number = 5;
  calcularClicks(numero: number) {
    this.contadorClicks += numero;
  }
}
