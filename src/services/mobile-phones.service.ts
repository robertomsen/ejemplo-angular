import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class MobilePhonesService {
  private apiUrl = 'https://mobile-phones1.p.rapidapi.com';

  constructor(private http: HttpClient) {}

  getBrands(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/brands.php`, {
      headers: {
        'x-rapidapi-key': 'eab43adbb9msha5cd9e43c63a454p164635jsn25a0ffdf17a0',
        'x-rapidapi-host': 'mobile-phones1.p.rapidapi.com',
      },
    });
  }

  getDevices(brand_id: any): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/devices.php`, {
      params: {brand_id: brand_id},
      headers: {
        'x-rapidapi-key': 'eab43adbb9msha5cd9e43c63a454p164635jsn25a0ffdf17a0',
        'x-rapidapi-host': 'mobile-phones1.p.rapidapi.com',
      },
    });
  }

  getMobilePhone(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/devices-details.php`, {
      params: {device_id: id},
      headers: {
        'x-rapidapi-key': 'eab43adbb9msha5cd9e43c63a454p164635jsn25a0ffdf17a0',
        'x-rapidapi-host': 'mobile-phones1.p.rapidapi.com',
      },
    });
  }
}
