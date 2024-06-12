import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private navCtrl: NavController) {}

  login() {
    const username = (document.getElementById('username') as HTMLInputElement).value;
    const password = (document.getElementById('password') as HTMLInputElement).value;

    if (username === 'laurinha30' && password === 'laura123') {
      this.navCtrl.navigateForward('/home');
    } else {
      alert('Usuário ou senha incorretos');
    }
  }

  ngOnInit() {
  }
}
