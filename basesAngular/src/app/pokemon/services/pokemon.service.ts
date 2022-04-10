import { Injectable } from "@angular/core";

interface pokemonSchema{
  nombre: string;
  poder:number
}

@Injectable()
export class pokemonService{
  pokemons:pokemonSchema[]=[
    {nombre:"Bulbasaur",poder:100},
    {nombre:"Charmander",poder:200},
    {nombre:"Squirtle",poder:300},
    {nombre:"Pikachu",poder:400},
  ]
  constructor(){
    console.log("Funciona")
  }
}
