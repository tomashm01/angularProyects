import { Component, Input, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PorPaisComponent } from '../../pages/por-pais/por-pais.component';

@Component({
  selector: 'app-pais-tabla',
  templateUrl: './pais-tabla.component.html',
  styleUrls: ['./pais-tabla.component.scss']
})
export class PaisTablaComponent implements OnInit {

  constructor() { }
  @Input() paises:Country[]=[];

  ngOnInit(): void {
  }

}
