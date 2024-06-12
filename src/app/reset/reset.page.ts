import { Component } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.page.html',
  styleUrls: ['./reset.page.scss'],
})
export class ResetPage {
  email!: string;

  constructor(
    private alertController: AlertController,
    private navCtrl: NavController,
    private authService: AuthService
  ) {}

  async resetSenha() {
    if (!this.email) {
      await this.mostrarAlerta('Erro', 'Por favor, insira um endereço de email.');
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(this.email)) {
      await this.mostrarAlerta('Erro', 'Por favor, insira um endereço de email válido.');
      return;
    }

    const success = await this.authService.resetPassword(this.email);
    if (success) {
      await this.mostrarAlerta('Sucesso', 'Um email de redefinição de senha foi enviado para o seu endereço de email.');
      this.navCtrl.navigateForward('/nova-senha');
    } else {
      await this.mostrarAlerta('Erro', 'Ocorreu um erro ao enviar o email de redefinição de senha. Por favor, tente novamente.');
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
