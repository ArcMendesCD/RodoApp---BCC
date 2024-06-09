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

  item: any;
  public segment: string = "list";
  users: any[] = [];
  public userNames: string[] = [];
  private apiUrl = 'http://168.121.216.20/users.php';

  constructor(private route: ActivatedRoute, private itemService: ItemService, private http: HttpClient) { }

  ngOnInit() {
      //ALL NAMES
    // this.itemService.getUsers().subscribe(response => {
    //   this.users = response;
    //   this.extractUserNames();
    // });

      // NAME 0
    // this.itemService.getUsers().subscribe(response => {
    //   if (response.length > 0) {
    //     this.userNames = response[0].first_name;
    //   }
    // });

      // ONLY 'LAURA'
    this.itemService.getUsers().subscribe(response => {
      this.users = response.filter(user => user.last_name === 'Yumi');
    });
  }
  //ALL NAMES
  // extractUserNames() {
  //   this.userNames = this.users.map(user => user.first_name);
  // }



  segmentChanged(ev: any) {
    this.segment = ev.detail.value;
    this.itemService.loadUsers();
  }

}
