// documentos.page.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';



@Component({
  selector: 'app-documentos',
  templateUrl: './documentos.page.html',
  styleUrls: ['./documentos.page.scss'],
})
export class DocumentosPage {

  // constructor(private router: Router) { }
  constructor(private navCtrl: NavController){}


  onFileSelected(tipoDocumento: string, event: any) {
    const file: File = event.target.files[0];
    if (file) {
     
    }
  }



  triggerFileInput(idInput: string) {
    const inputElement = document.getElementById(idInput) as HTMLInputElement;
    if (inputElement) {
      inputElement.click();
    }
  }

  navegarParaNotaFiscal() {
    this.navCtrl.navigateForward(['/nota-fiscal']);
  }

  navegarParaNotaCarga() {
    this.navCtrl.navigateForward(['/carga']);
  }
}
