import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { error } from 'console';
import { catchError, Observable, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private api = 'http://localhost:8080/transTest/search';
  private apiSave = 'http://localhost:8080/transTest';

  constructor(private http: HttpClient) {}

  SearchTrans(searchParams: any): Observable<any[]> {
    console.log('searchParams: ', searchParams);
    return this.http.post<any[]>(this.api, searchParams).pipe(
      tap((data) => console.log('API tra ve: ', data)),
      catchError((error) => {
        console.error('Loi khi goi api ser: ', error);
        return throwError(
          () => new Error(error.message || 'Lỗi không xác định')
        );
      })
    );
  }

  // SearchTrans(searchParams: any): Observable<any>{
  //   let params = new HttpParams():

  //   if(searchParams.transactionId){
  //     params = params.set('transactionId', searchParams.transactionId);
  //   }
  // }
}

// getCurrencies(): Observable<any[]> {
//   return this.http.get<any[]>(this.apiCurrency).pipe(
//     tap((data) => console.log('API trả về:', data)), // Log dữ liệu API trả về
//     catchError((error) => {
//       console.error('Lỗi khi gọi API ser:', error); // Log lỗi
//       return throwError(
//         () => new Error(error.message || 'Lỗi không xác định')
//       );
//     })
//   );
// }
