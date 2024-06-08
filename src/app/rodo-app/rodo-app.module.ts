import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RodoAppPageRoutingModule } from './rodo-app-routing.module';

import { RodoAppPage } from './rodo-app.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RodoAppPageRoutingModule
  ],
  declarations: [RodoAppPage]
})
export class RodoAppPageModule {}
