import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  public token: string = '';
  public omitCalls = ['auth'];
  public skipInterceptor = false;

  constructor(private router: Router, private apiService: ApiService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.omitCalls.forEach(api => {
      if (req.url.includes(api)) {
        this.skipInterceptor = true;
      }
    });
    this.token = this.apiService.getUserToken();

    if (this.token || this.skipInterceptor) {
      const tokenizedReq = req.clone({ headers: req.headers.set('Authorization', 'Bearer ' + this.token) });
      return next.handle(tokenizedReq).pipe(map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          if (event.status === 401) {
            this.apiService.userLoggedOut();
            this.router.navigateByUrl('auth/login');
          }
        }
        return event;
      }));
    } else {
      this.apiService.userLoggedOut();
      this.router.navigateByUrl('auth/login');
    }
    return next.handle(req);
  }
}
