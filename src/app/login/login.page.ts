import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { ItemService } from '../services/item.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private route: ActivatedRoute, private itemService: ItemService, private http: HttpClient) { }

  ngOnInit() {
    this.itemService.loadData();
  }



  // if (this.uname.length === 0 || this.password.length === 0) {
  //   this.alertMessage = "Campos obrigatórios não podem estar em branco!";
  //   return;
  // }
}
