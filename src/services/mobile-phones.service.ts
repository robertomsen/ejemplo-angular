import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class MobilePhonesService {
  private apiUrl = 'https://mobile-phones1.p.rapidapi.com/';

  constructor(private http: HttpClient) {}

  getMobilePhones(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}brands.php`, {
      headers: {
        'x-rapidapi-key': 'e814500a77msh9c2a8385449d375p1d2061jsnc8976a3a52ae',
        'x-rapidapi-host': 'mobile-phones1.p.rapidapi.com',
      },
    });
  }

  getMobilePhone(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`, {
      headers: {
        'x-rapidapi-key': 'e814500a77msh9c2a8385449d375p1d2061jsnc8976a3a52ae',
        'x-rapidapi-host': 'mobile-phones1.p.rapidapi.com',
      },
    });
  }
}
