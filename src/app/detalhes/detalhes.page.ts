import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.page.html',
  styleUrls: ['./detalhes.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class DetalhesPage implements OnInit {
  public nome:string= "";
  public imagem:string= "";
  constructor(private route:ActivatedRouter, private pokeAPI:PokeAPIService) { }

  ngOnInit() {
  this.nome = this.route.snapshot.paramMap.get("nome") || '';
  this.imagem = await this.pokeAPI.buscarPokemon(this.nome).toLowerCase();
  this.imagem = dados.sprites.other.dream_world.front_default
}

}
