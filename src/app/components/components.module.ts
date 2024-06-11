import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { LogoHeaderComponent } from './logo-header/logo-header.component';
import { TabFooterComponent } from './tab-footer/tab-footer.component';
import { RouterModule } from '@angular/router';
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule
    ],
    exports: [
        LogoHeaderComponent,
        TabFooterComponent,
        RouterModule
    ],
    declarations: [
        LogoHeaderComponent,
        TabFooterComponent
    ]
})
export class ComponentsModule { }
