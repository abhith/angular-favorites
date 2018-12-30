import { AuthService } from "ngx-auth";
import { Injectable } from "@angular/core";
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpResponse,
  HttpErrorResponse
} from "@angular/common/http";
import { Observable } from "rxjs";
import { catchError, tap } from "rxjs/operators";

@Injectable()
export class InterceptService implements HttpInterceptor {
  // intercept request and add token
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // modify request
    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`
      },
      // withCredentials: true
    });
    // console.log('----request----');
    // console.log(request);
    // console.log('--- end of request---');

    return next.handle(request).pipe(
      tap(
        event => {
          if (event instanceof HttpResponse) {
            // console.log('all looks good');
            // http response status code
            // console.log(event.status);
          }
        },
        error => {
          if (error instanceof HttpErrorResponse) {
            if (error.status === 401) {
              // redirect to the login route
              // or show a modal
              // this.authentication.logout();
            }
          }
          // http response status code
          // console.log('----response----');
          // console.error('status code:');
          console.error(error.status);
          console.error(error.message);
          // console.log('--- end of response---');
        }
      )
    );
  }
}
