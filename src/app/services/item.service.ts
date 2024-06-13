import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private apiUrl = 'DB URL HERE';

  data: any = [];

  constructor(private http: HttpClient) { }

  loadData() {
    this.http.get(this.apiUrl).subscribe((response) => {
      console.log(response);
      this.data = response;
    });
  }

  getShipping(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/shipping.php`);
  }

  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/users.php`);
  }
}
