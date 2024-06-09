import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
    selector: 'app-documentos',
    templateUrl: './documentos.page.html',
    styleUrls: ['./documentos.page.scss'],
})
export class DocumentosPage {
  documento: any;

    constructor(private navCtrl: NavController){}
  

  onFileSelected(tipoDocumento: string, event: any) {
    const file = event.target.files[0];
    if (file) {
      this.documento = {
        nomeArquivo: file.name,
        dataUpload: new Date(),
        tamanhoArquivo: (file.size / 1024).toFixed(2), // tamanho em KB
        tipoDocumento: tipoDocumento,
        url: URL.createObjectURL(file) // criando uma URL para visualizar o arquivo
      };
    }
  }

  triggerFileInput(idInput: string) {
    const inputElement = document.getElementById(idInput) as HTMLInputElement;
    if (inputElement) {
      inputElement.click();
    }
  }

  downloadArquivo(url: string) {
    const a = document.createElement('a');
    a.href = url;
    a.download = this.documento.nomeArquivo;
    a.click();
  }

   navegarParaNotaFiscal() {
    this.navCtrl.navigateForward(['/nota-fiscal']);
  }

  navegarParaNotaCarga() {
    this.navCtrl.navigateForward(['/cargas']);
  }
}