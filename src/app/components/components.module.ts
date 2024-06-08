import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { LogoHeaderComponent } from './logo-header/logo-header.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
    ],
    exports: [
        LogoHeaderComponent
    ],
    declarations: [
        LogoHeaderComponent
    ]
})
export class ComponentsModule { }
