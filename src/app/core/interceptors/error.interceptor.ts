import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        let errorMessage = 'An unknown error occurred!';

        if (error.error instanceof ErrorEvent) {
          // Client-side or network error
          errorMessage = `Error: ${error.error.message}`;
        } else {
          // Backend returned an unsuccessful response code
          switch (error.status) {
            case 400:
              errorMessage = 'Bad Request. Please check your input.';
              break;
            case 401:
              errorMessage = 'Unauthorized. Please log in again.';
              // Could trigger logout here
              break;
            case 403:
              errorMessage = 'Forbidden. You do not have permission to perform this action.';
              break;
            case 404:
              errorMessage = 'Not Found. The requested resource was not found.';
              break;
            case 500:
              errorMessage = 'Internal Server Error. Please try again later.';
              break;
            default:
              errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
          }
        }

        console.error('HTTP Error:', errorMessage);
        // Could show a toast notification or dispatch to a global error handler

        return throwError(() => new Error(errorMessage));
      })
    );
  }
}
