import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Requirements } from '../Models/Requerimiento';

@Injectable({
  providedIn: 'root',
})
export class AdresApiService {
  protected url: string = 'http://localhost:8123/api/Adres/';
  constructor(private http: HttpClient) {}

  options = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  getRequirementsById(Id: number) {
    return this.http.get<Requirements>(this.url + '/' + Id);
  }
}
