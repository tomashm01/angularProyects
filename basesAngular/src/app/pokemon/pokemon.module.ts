import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainComponent } from './main/main.component';
import { pokemonService } from './services/pokemon.service';

@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    MainComponent,
  ],
  providers: [
    pokemonService
  ]
})
export class PokemonModule { }
