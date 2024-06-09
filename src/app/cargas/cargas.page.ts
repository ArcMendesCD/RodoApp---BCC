import { Component } from '@angular/core';

@Component({
  selector: 'app-cargas',
  templateUrl: './cargas.page.html',
  styleUrls: ['./cargas.page.scss'],
})
export class CargasPage {
  documento: any; // Adicione a lógica necessária para inicializar este documento

  constructor() { }

  downloadArquivo(url: string) {
    const a = document.createElement('a');
    a.href = url;
    a.download = this.documento.nomeArquivo;
    a.click();
  }
}