import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GifsPageComponent } from './gifs-page/gifs-page.component';
import { BusquedaGifsComponent } from './busqueda-gifs/busqueda-gifs.component';
import { MostrarGifsComponent } from './mostrar-gifs/mostrar-gifs.component';
import { ResultadosComponent } from './resultados/resultados.component';



@NgModule({
  declarations: [
    GifsPageComponent,
    BusquedaGifsComponent,
    MostrarGifsComponent,
    ResultadosComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    GifsPageComponent
  ],
})
export class GifsModule { }
