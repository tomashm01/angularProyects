import { Component, OnInit } from '@angular/core';
import { pokemonService } from '../services/pokemon.service';

interface pokemonSchema{
  nombre: string;
  poder:number
}

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  schema:pokemonSchema={
    nombre:"Ejemplo",
    poder:100
  }

  pokemons:pokemonSchema[]=[
    {nombre:"Bulbasaur",poder:100},
    {nombre:"Charmander",poder:200},
    {nombre:"Squirtle",poder:300},
    {nombre:"Pikachu",poder:400},
  ]

  constructor(private pokemonService:pokemonService) { }

  ngOnInit() {
  }

  agregarPokemon(e:Event){
    e.preventDefault();
    if(this.schema.nombre.trim().length==0 || this.schema.poder<0){return; }
    this.pokemons.push(this.schema);
  }



}

