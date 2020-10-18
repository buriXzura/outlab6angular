import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Review } from './reviewInterface';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  configURL="https://cs251-outlab-6.herokuapp.com/initial_values/";
  postURL="https://cs251-outlab-6.herokuapp.com/add_new_feedback/";
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  getRequest():Observable<Review> {
    return this.http.get<Review>(this.configURL)
      .pipe(
        catchError(this.handleError)
      );
  }

  postRequest(review: any) {
    let body = ( JSON.stringify(review) );
    return this.http.post<Review>(this.postURL,body,this.httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    alert("oops! something went wrong :(");
    if(error.error instanceof ErrorEvent) {
      console.error('An error occured:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`
      );
    }
    return throwError(
      'Something bad happened; please try again later.'
    );
  }

  constructor(private http: HttpClient) { }
}
