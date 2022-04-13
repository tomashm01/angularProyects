import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent implements OnInit {

  constructor(private paisService:PaisService) { }

  termino:string=""
  hayError:boolean=false ;
  paisesBuscados:Country[]=[];

  buscar(termino:string){
    this.hayError = false;
    this.termino=termino;

    this.paisService.buscarPais(this.termino).subscribe({
      next: (paises)=>{
        this.paisesBuscados = paises;
      },
      error: (err)=>{
        this.paisesBuscados = [];
        this.hayError = true;
      }
    }
    )
  }

  sugerencias(e:string){
    this.hayError = false;
    return this.paisesBuscados.map(pais=>pais.name);
  }

  ngOnInit(): void {
  }

}
