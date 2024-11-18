import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokeAPIService {
  private URL:string = "https://pokeapi.co/api/v2/pokemon/";
  constructor() { }

  public async buscarPokemon(nome:string){
    const requisicao = await fetch(this.URL+nome);
    const dados = await requisicao.json();
    return dados;
  }
}
