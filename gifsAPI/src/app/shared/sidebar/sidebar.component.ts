import { Component, OnInit } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent implements OnInit {

  constructor(private serviceBuscar: GifsService) { }

  get getHistorial(){
    return this.serviceBuscar.getHistorial;
  }

  buscar(termino:string): void {
    this.serviceBuscar.buscarGifs(termino);
  }

  ngOnInit(): void {
  }

}
