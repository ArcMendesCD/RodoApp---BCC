import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  uploadFile(file: File, tipoDocumento: string): Observable<any> {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('tipoDocumento', tipoDocumento);

    return this.http.post(`${this.baseUrl}/upload`, formData);
  }
}