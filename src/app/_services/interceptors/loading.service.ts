import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { catchError, finalize, Observable, throwError } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '@app/app.reducer';
import { isLoading, stopLoading } from '@app/_store/ui.actions';

@Injectable({
  providedIn: 'root'
})
export class LoadingService implements HttpInterceptor {

  constructor(private store:Store<AppState>) { }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // You can modify the request here, for example, adding headers or handling tokens.
    // Remember to always return the request object, otherwise the request will not be sent.
    // Forward the modified request to the next handler in the chain.
    // console.log('intercepted request ... ');
    this.store.dispatch(isLoading());

    return next.handle(request).pipe(
      // You can also modify the response here
      // (for example, to handle an error or log the response body).
      // Remember that, if you don't return the modified response,
      // the response won't be delivered to your application code

      catchError((error: HttpErrorResponse) => {
        // Handle the error here
        // If you don't throw, the error will continue through the chain.
        return throwError(() => new Error(error.message));
      }),

      finalize(() => {
        // console.log('request finalized ... ');
        this.store.dispatch(stopLoading());
      })
    )
  }
}
