import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AlertController, IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class HomePage {
  public notaA: number | undefined;
  public notaB: number | undefined;
  public media: number | undefined;
  public situacao: string = "";

  constructor(private alertController: AlertController) {}

  calcularMedia(){

    if(this.notaA && this.notaB){
      this.media = (this.notaA + this.notaB) / 2;
      this.situacao = this.media >= 7 ? 'Aprovado' : 'Reprovado';
    }
    else {
      this.exibirAlerta();
    }
  }

  async exibirAlerta(){
    const alert = await this.alertController.create({
      header: 'Atenção',
      message: 'Por favor, digite as duas notas antes de calcular a média',
      buttons: ['OK']
    });

    await alert.present();
  }
}
