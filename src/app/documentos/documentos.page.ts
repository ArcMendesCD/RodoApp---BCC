import { Component } from '@angular/core';

@Component({
  selector: 'app-documentos',
  templateUrl: './documentos.page.html',
  styleUrls: ['./documentos.page.scss'],
})
export class DocumentosPage {

  constructor() { }

  onFileSelected(tipoDocumento: string, event: any) {
    // Lógica para processar o arquivo selecionado
  }

  triggerFileInput(idInput: string) {
    const inputElement = document.getElementById(idInput) as HTMLInputElement;
    if (inputElement) {
      inputElement.click();
    }
  }
}
