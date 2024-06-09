import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  constructor(private router: Router) {}

  ngOnInit() {
  }

  navegarParaPerfil() {
    this.router.navigate(['/perfil']);
  }

  navegarParaFretesAtivos() {
    this.router.navigate(['/frete']);
  }

  navegarParaFretesDisponiveis() {
    // this.router.navigate(['/fretes-disponiveis']);
  }

  navegarParaMapa() {
    // this.router.navigate(['/mapa']);
  }

  navegarParaDocumentos() {
    this.router.navigate(['/documentos']);
  }
}
