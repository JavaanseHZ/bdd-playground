import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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

  getCountries() {
    return this.http.get(localUrl + "/countries");
  }

  calculate(contract) {
    var calculation = {
      name: contract.name,
      dateOfBirth: this.getDateString(contract.dateOfBirth),
      country: contract.country
    }
    return this.http.post(localUrl +"/contract/calculate", JSON.stringify(calculation), httpOptions);
  }

  private getDateString(date) {
    return date.year + "-" + (date.month - 1) + "-" + date.day;
  }

}
