import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private apiUrl = 'http://168.121.216.20/';

  data: any = [];

  constructor(private http: HttpClient) { }

  loadData() {
    this.http.get(this.apiUrl).subscribe((response) => {
      console.log(response);
      this.data = response;
    });
  }

  getData(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
  
}
