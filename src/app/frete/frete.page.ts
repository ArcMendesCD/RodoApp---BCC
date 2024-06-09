import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { ItemService } from '../services/item.service';

@Component({
  selector: 'app-frete',
  templateUrl: './frete.page.html',
  styleUrls: ['./frete.page.scss'],
})
export class FretePage implements OnInit {

  public segment: string = "list";
  data_Disponivel: any[] = [];
  data_Andamento: any[] = [];
  data_Finalizada: any[] = [];

  constructor(private route: ActivatedRoute, private itemService: ItemService, private http: HttpClient) { }

  ngOnInit() {
    this.itemService.getShipping().subscribe(response => {
      this.data_Disponivel = response.filter(shipping => shipping.shipping_status === 'Disponivel');
    });

    this.itemService.getShipping().subscribe(response => {
      this.data_Andamento = response.filter(shipping => shipping.shipping_status === 'Em Andamento');
    });

    this.itemService.getShipping().subscribe(response => {
      this.data_Finalizada = response.filter(shipping => shipping.shipping_status === 'Finalizada');
    });
  };

  segmentChanged(ev: any) {
    this.segment = ev.detail.value;
    this.itemService.loadData();
  }

}
