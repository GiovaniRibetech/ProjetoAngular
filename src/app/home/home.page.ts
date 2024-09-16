import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class HomePage {
  public nome = "";

  public items: any[] = [
    {
      titulo: "Forró"
    },
    {
      titulo: "Rock"
    },
    {
      titulo: "Sertanejo"
    },
    {
      titulo: "Funk"
    }
  ]


  constructor() { }

  adicionar() {
    this.items.push({ titulo: this.nome });
    this.nome = "";
  }

  remover(posicao: number) {
    this.items.splice(posicao, 1)
  }
}
