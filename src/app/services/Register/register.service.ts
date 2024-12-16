import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { error } from 'console';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  private api = 'http://localhost:8080/auth/signup';
  constructor(private http: HttpClient) {}

  SignUp(signUp: any): Observable<any> {
    console.log('Register JSON:', JSON.stringify(signUp, null, 2));

    return this.http
      .post<any>(this.api, signUp, {
        headers: { 'Content-Type': 'application/json' },
      })
      .pipe(
        catchError((error) => {
          console.error('Error while signup: ', error);
          return throwError(
            () => new Error(error.message || 'An unknown error occurred')
          );
        })
      );
  }
}
