import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IloginData, IloginResponse } from '../interface/core.interface';

const apiURL = environment.apiURL
@Injectable({
  providedIn: 'root'
})
export class CoreService {
  
  constructor(private http: HttpClient) { }

  getLogin(loginData: IloginData): Observable<IloginResponse> {
    return this.http.post<IloginResponse>(apiURL + '/login', loginData)
  }
}
