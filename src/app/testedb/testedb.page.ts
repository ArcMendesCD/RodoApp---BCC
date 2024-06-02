import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-testedb',
  templateUrl: './testedb.page.html',
  styleUrls: ['./testedb.page.scss'],
})
export class TestedbPage implements OnInit {

  users : any = [];


  constructor(private http: HttpClient) { 
  }

  ngOnInit() {
  }

  getUser() {
    console.log('get user working')

    this.http.get('http://168.121.216.20/users.php').subscribe((response)=>{
      console.log(response)
      this.users = response;
    });
  }

}
