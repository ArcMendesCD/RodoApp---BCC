import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-frete',
  templateUrl: './frete.page.html',
  styleUrls: ['./frete.page.scss'],
})
export class FretePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  // PEGAR DO BANCO
  public segment: string = "list";
  public arr = new Array(25);

  segmentChanged(ev: any) {
    this.segment = ev.detail.value;
  }
}
