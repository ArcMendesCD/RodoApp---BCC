import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  users : any = [];

  first_name: string = '';
  email: string = '';
  phone: string = '';
  user_type: string = '';

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
