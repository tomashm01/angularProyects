import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda-gifs',
  templateUrl: './busqueda-gifs.component.html',
  styles: [
  ]
})
export class BusquedaGifsComponent implements OnInit {

  constructor(private serviceBuscar: GifsService) { }

  ngOnInit(): void {
  }

  @ViewChild('textBuscar') textBuscar!: ElementRef<HTMLInputElement>;

  buscar(): void {
    let valorBuscado= this.textBuscar.nativeElement.value;
    if(valorBuscado.trim().length==0) return;
    this.serviceBuscar.buscarGifs(valorBuscado)
    valorBuscado="";
  }

}
