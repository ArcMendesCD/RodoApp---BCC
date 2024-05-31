import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { DocumentosPageRoutingModule } from './documentos-routing.module'; // Importa o módulo de roteamento da página de documentos
import { DocumentosPage } from './documentos.page'; // Importa o componente da página de documentos

@NgModule({
  imports: [
    CommonModule, // Importa CommonModule para funcionalidades comuns do Angular
    FormsModule,  // Importa FormsModule para funcionalidades de formulários
    IonicModule,  // Importa IonicModule para componentes do Ionic
    DocumentosPageRoutingModule // Importa o módulo de roteamento da página de documentos
  ],
  declarations: [DocumentosPage] // Declara o componente DocumentosPage
})
export class DocumentosPageModule { }
