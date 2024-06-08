import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RodoAppPage } from './rodo-app.page';

const routes: Routes = [
  {
    path: '',
    component: RodoAppPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RodoAppPageRoutingModule {}
