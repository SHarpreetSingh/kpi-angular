// import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { catchError, map } from 'rxjs/operators';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class KPIService {


  baseUri: string = 'http://localhost:8080/api/timesheet';
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private http: HttpClient) { }
  // Create
  createEmployee(data: any): Observable<any> {
    console.log("data", data)
    let url = `${this.baseUri}/kpi`;
    const response = this.http.post(url, data).pipe(catchError(this.errorMgmt));
    console.log("-----------:", response)
    return response
  }

  createKpiMatrx(data: any): Observable<any> {
    let url = `${this.baseUri}/kpiMatrics`;
    const response = this.http.post(url, data).pipe(catchError(this.errorMgmt));
    return response
  }


  // Get all employees
  getEmployees() {
    return this.http.get(`${this.baseUri}/kpi`);
  }

  readKpimtrx() {
    return this.http.get(`${this.baseUri}/kpiMatrics`);
  }

  errorMgmt(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }
}
