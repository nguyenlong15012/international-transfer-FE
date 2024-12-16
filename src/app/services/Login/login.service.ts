import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { error } from 'console';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private api = 'http://localhost:8080/auth/signin';
  constructor(private http: HttpClient) {}

  SignIn(signIn: any): Observable<any> {
    console.log('Sign In Json', JSON.stringify(signIn, null, 2));

    return this.http
      .post<any>(this.api, signIn, {
        headers: { 'Content-Type': 'application/json' },
      })
      .pipe(
        catchError((error) => {
          console.error('Error while SignIn: ', error);
          return throwError(
            () => new Error(error.message || 'An unknow error occurred')
          );
        })
      );
  }
}
