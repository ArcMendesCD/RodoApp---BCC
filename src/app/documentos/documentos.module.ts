import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { DocumentosPageRoutingModule } from './documentos-routing.module'; // Importa o módulo de roteamento da página de documentos
import { DocumentosPage } from './documentos.page'; // Importa o componente da página de documentos
import { ComponentsModule } from '../components/components.module';

@NgModule({
  imports: [
    CommonModule, 
    FormsModule,  
    IonicModule,
    ComponentsModule,
    DocumentosPageRoutingModule 
  ],
  declarations: [DocumentosPage] 
})
export class DocumentosPageModule { }