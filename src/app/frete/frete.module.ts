import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { FretePageRoutingModule } from './frete-routing.module';
import { FretePage } from './frete.page';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    FretePageRoutingModule
  ],
  declarations: [
    FretePage
  ]
})
export class FretePageModule {}
