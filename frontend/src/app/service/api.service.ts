import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Contract } from '../model/contract';
import { ValidationError } from '../model/validationerror';

const localUrl = 'http://localhost:8080/api';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getCountries() : Observable<Object> {
    return this.http
      .get(localUrl + "/countries")
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  caculateContract(contract : Contract): Observable<Object> {
    var calculation = {
      name: contract.name,
      dateOfBirth: this.getDateString(contract.dateOfBirth),
      country: contract.country
    }
    return this.http
      .post(localUrl +"/contract/calculate", JSON.stringify(calculation), httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  private getDateString(date) {
     return date != null ? `${date.year}-${this.padNumber(date.month)}-${this.padNumber(date.day)}` : '';
  }

  private padNumber(value: number) {
      return `0${value}`.slice(-2);
  }

  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    var validationErrors: ValidationError[] = []; 
    for (let i = 0; i < error.error.errors.length; i++) {
      const validationError = new ValidationError(error.error.errors[i].field as String, error.error.errors[i].message as String);
      validationErrors.push(validationError);
    }
    return throwError(
      validationErrors);
  };

}
