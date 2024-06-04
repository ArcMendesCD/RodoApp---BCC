import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FretePageRoutingModule } from './frete-routing.module';

import { FretePage } from './frete.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FretePageRoutingModule
  ],
  declarations: [FretePage]
})
export class FretePageModule {}
