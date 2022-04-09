import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title: string = 'Contador app';
  contadorClicks: number = 0;
  base: number = 5;
  calcularClicks(numero:number){
    this.contadorClicks+=numero;
  }
}
