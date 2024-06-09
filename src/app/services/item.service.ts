import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private apiUrl = 'http://168.121.216.20/users.php';

  users: any = [];

  constructor(private http: HttpClient) { }

  loadUsers() {
    this.http.get(this.apiUrl).subscribe((response) => {
      console.log(response);
      this.users = response;
    });
  }

  getItem(first_name: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}?first_name=laurinha`);
  }

  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
  
}
