import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class TransService {
  private apiSave = 'http://localhost:8080/transTest';

  constructor(private http: HttpClient) {}
  SaveTransaction(transTest: any): Observable<any> {
    console.log('Saving transaction:', transTest);
    console.log('Transaction JSON:', JSON.stringify(transTest, null, 2));
    return this.http
      .post<any>(this.apiSave, transTest, {
        headers: { 'Content-Type': 'application/json' },
      })
      .pipe(
        catchError((error) => {
          console.error('Error while saving transaction:', error);
          return throwError(
            () => new Error(error.message || 'An unknown error occurred')
          );
        })
      );
  }
}
