import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'frete',
    loadChildren: () => import('./frete/frete.module').then( m => m.FretePageModule)
  },
  {
    path: 'mapa',
    loadChildren: () => import('./mapa/mapa.module').then( m => m.MapaPageModule)
  },
  {
    path: 'rodo-app',
    loadChildren: () => import('./rodo-app/rodo-app.module').then( m => m.RodoAppPageModule)
  },
  {    path: 'documentos',
    loadChildren: () => import('./documentos/documentos.module').then( m => m.DocumentosPageModule)
  },
  {
    path: 'cargas',
    loadChildren: () => import('./cargas/cargas.module').then( m => m.CargasPageModule)
  },
  {
    path: 'nota-fiscal',
    loadChildren: () => import('./nota-fiscal/nota-fiscal.module').then( m => m.NotaFiscalPageModule)
  },
  {
    path: 'nota-fiscal',
    loadChildren: () => import('./nota-fiscal/nota-fiscal.module').then( m => m.NotaFiscalPageModule)
  },
  // {
  //   path: 'upload',
  //   loadChildren: () => import('./upload/upload.module').then( m => m.UploadPageModule)
  // },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
