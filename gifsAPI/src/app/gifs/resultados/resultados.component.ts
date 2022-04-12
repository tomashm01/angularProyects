import { Component, OnInit } from '@angular/core';
import { GifsService } from '../services/gifs.service';

import { Gif } from '../interface/gifs.interface';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
})
export class ResultadosComponent implements OnInit {

  constructor(private gifsService: GifsService) { }

  get getResultados(): Gif[] {
    return this.gifsService.resultados;
  }

  ngOnInit(): void {
  }

}
