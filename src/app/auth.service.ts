  import { Injectable } from '@angular/core';
  import { AlertController } from '@ionic/angular';


  @Injectable({
    providedIn: 'root'
  })
  export class AuthService {
  
    constructor(private alertController: AlertController) { }

     // Método para autenticar o usuário
  async login(email: string, password: string): Promise<boolean> {
    // Aqui você pode implementar a lógica de autenticação, como verificar as credenciais em um servidor
    // Por enquanto, vamos apenas simular um login bem-sucedido se o email for "user@example.com" e a senha for "password"
    if (email === 'user@example.com' && password === 'password') {
      return true; // Login bem-sucedido
    } else {
      return false; // Login falhou
    }
  }
  
  async resetPassword(email: string): Promise<boolean> {
    if (email) {
      await new Promise(resolve => setTimeout(resolve, 2000));
      console.log('Email de redefinição de senha enviado para:', email);
      return true;
    }
    return false;
  }

  async changePassword(newPassword: string): Promise<boolean> {
    if (newPassword) {
      await new Promise(resolve => setTimeout(resolve, 2000));
      console.log('Senha alterada para:', newPassword);
      return true;
    }
    return false;
  }
}