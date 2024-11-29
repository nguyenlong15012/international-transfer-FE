import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CurrencyService {
  private apiCurrency = 'http://localhost:8080/masterdata';

  constructor(private http: HttpClient) {}

  getCurrencies(): Observable<any[]> {
    return this.http.get<any[]>(this.apiCurrency).pipe(
      tap((data) => console.log('API trả về:', data)), // Log dữ liệu API trả về
      catchError((error) => {
        console.error('Lỗi khi gọi API ser:', error); // Log lỗi
        return throwError(
          () => new Error(error.message || 'Lỗi không xác định')
        );
      })
    );
  }
  // getCurrencies(): Observable<any[]> {
  //   return this.http.get<any[]>(this.apiCurrency);
  // }
}
