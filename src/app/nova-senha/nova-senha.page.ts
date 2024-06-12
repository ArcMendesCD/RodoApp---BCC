import { Component } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-nova-senha',
  templateUrl: './nova-senha.page.html',
  styleUrls: ['./nova-senha.page.scss'],
})
export class NovaSenhaPage {
  novaSenha!: string;
  confirmaSenha!: string;

  constructor(
    private alertController: AlertController,
    private navCtrl: NavController,
    private authService: AuthService
  ) {}

  async mudarSenha() {
    if (!this.novaSenha || !this.confirmaSenha) {
      await this.mostrarAlerta('Erro', 'Por favor, preencha todos os campos.');
      return;
    }

    if (this.novaSenha !== this.confirmaSenha) {
      await this.mostrarAlerta('Erro', 'As senhas não coincidem.');
      return;
    }

    const success = await this.authService.changePassword(this.novaSenha);
    if (success) {
      await this.mostrarAlerta('Sucesso', 'Sua senha foi alterada com sucesso.');
      this.navCtrl.navigateForward('/login');
    } else {
      await this.mostrarAlerta('Erro', 'Ocorreu um erro ao alterar a senha. Por favor, tente novamente.');
    }
  }

  async mostrarAlerta(titulo: string, mensagem: string) {
    const alerta = await this.alertController.create({
      header: titulo,
      message: mensagem,
      buttons: ['OK']
    });
    await alerta.present();
  }
}
