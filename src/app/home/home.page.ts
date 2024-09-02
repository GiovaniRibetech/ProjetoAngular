import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AlertController, IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule,FormsModule,AlertController]
})
export class HomePage {
  public gasolina: number | undefined;
  public alcool: number | undefined;
  public razao: number | undefined;
  public situacao: string = "";

  constructor(private alertController: AlertController) { }

    calcularBene(){
      if(this.gasolina && this.alcool){
        this.razao = this.alcool / this.gasolina;
        if(this.razao <= 0.7){
          this.situacao = "Álcool compensa";
        }
        if(this.razao > 0.7){
          this.situacao = "Gasolina compensa";
        }
        else{
          this.exibirAlerta();
        }
      }
    }

    async exibirAlerta() {
      const alert = await this.alertController.create({
      header: 'Atenção',
      message: 'Por favor, digite as duas notas antes de calcular a média',
      buttons: ['OK']
      });

      await alert.present();
}
}