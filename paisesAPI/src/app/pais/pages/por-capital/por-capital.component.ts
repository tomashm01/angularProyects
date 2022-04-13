import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent implements OnInit {

  constructor(private paisService:PaisService) { }

  termino:string=""
  hayError:boolean=false ;
  paisesBuscados:Country[]=[];
  placeholder:string=""

  buscar(termino:string){
    this.hayError = false;
    this.termino=termino;

    this.paisService.buscarCapital(this.termino).subscribe({
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
