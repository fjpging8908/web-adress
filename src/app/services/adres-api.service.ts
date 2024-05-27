import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Requirements } from '../Models/Requerimiento';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AdresApiService {
  protected url: string = 'http://localhost:8123/api/Adres';
  constructor(private http: HttpClient) { }

  options = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  getRequirementsById(Id: number) {
    var urlGet = this.url + '/' + Id;
    return this.http.get<Requirements>(urlGet);
  }

  getAlRequirements(filter: Requirements) {
    var urlGet = this.url;
    let parmValAdqu;

    let params = new HttpParams()
      .set('Number', String(filter.number))
      .set('businessUnity', String(filter.businessUnity))
      .set('Type', String(filter.type))
      .set('Provider', String(filter.provider))

    if (filter.acquisitionDate) {
      parmValAdqu = new Date(filter.acquisitionDate).toISOString();
      params = params.set('acquisitionDate', parmValAdqu)
    }
    return this.http.get<Requirements[]>(urlGet, { params });
  }

  postAlRequirements(newItem: Requirements) {
    var urlGet = this.url;
    return this.http.post<Requirements[]>(urlGet, newItem);
  }

  putAlRequirements(updItem: Requirements) {
    var urlGet = this.url + '/' + updItem.id;
    return this.http.put<Requirements[]>(urlGet, updItem);
  }

}
