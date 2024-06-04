// documentos.page.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-documentos',
  templateUrl: './documentos.page.html',
  styleUrls: ['./documentos.page.scss'],
})
export class DocumentosPage {

  constructor(private router: Router) { }

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
    this.router.navigate(['/nota-fiscal']);
  }

  navegarParaNotaCarga() {
    this.router.navigate(['/carga']);
  }
}
