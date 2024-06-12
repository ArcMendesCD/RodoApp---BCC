import { Component } from '@angular/core';
import { NavController } from '@ionic/angular'; // Importe o NavController para navegação entre páginas

@Component({
  selector: 'app-reset-senha',
  templateUrl: './reset-senha.page.html',
  styleUrls: ['./reset-senha.page.scss'],
})
export class ResetSenhaPage {

  constructor(private navCtrl: NavController) {}

  resetSenha() {
    // Lógica para redefinir a senha
    // Por exemplo, enviar um e-mail de redefinição de senha
    // Depois de enviar o e-mail, você pode navegar para outra página, se necessário
    this.navCtrl.navigateForward('/home');
  }
}