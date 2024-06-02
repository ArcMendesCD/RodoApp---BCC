import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestedbPage } from './testedb.page';

const routes: Routes = [
  {
    path: '',
    component: TestedbPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestedbPageRoutingModule {}
