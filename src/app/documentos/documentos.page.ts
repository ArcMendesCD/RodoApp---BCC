// documentos.page.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UploadService } from '../upload.service';

@Component({
  selector: 'app-documentos',
  templateUrl: './documentos.page.html',
  styleUrls: ['./documentos.page.scss'],
})
export class DocumentosPage {

  constructor(private uploadService: UploadService, private router: Router) { }

  onFileSelected(tipoDocumento: string, event: any) {
    const file: File = event.target.files[0];
    if (file) {
      this.uploadService.uploadFile(file, tipoDocumento).subscribe(response => {
        console.log('Upload successful', response);
      }, error => {
        console.error('Upload failed', error);
      });
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

  navigarParaNotaCarga() {
    this.router.navigate(['/carga']);
  }
}
