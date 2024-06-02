import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TestedbPageRoutingModule } from './testedb-routing.module';

import { TestedbPage } from './testedb.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TestedbPageRoutingModule
  ],
  declarations: [TestedbPage]
})
export class TestedbPageModule {}
