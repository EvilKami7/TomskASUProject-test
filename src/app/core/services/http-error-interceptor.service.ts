import { Injectable } from '@angular/core';
import {
  HttpErrorResponse,
  HttpEvent, HttpHandler, HttpInterceptor, HttpRequest,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { NotificationService } from '../../shared/services/notification.service';
import { ActionDeterminateService } from '../../shared/services/action-determinate.service';

@Injectable({
  providedIn: 'root',
})
export class HttpErrorInterceptor implements HttpInterceptor {
  constructor(private notifyService: NotificationService, private actionDeterminate: ActionDeterminateService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req)
      .pipe(
        retry(1),
        catchError((error: HttpErrorResponse) => {
          let message = '';
          switch (error.status) {
            case 400:
              message = 'Bad request!';
              break;
            case 404:
              message = 'Not Found!';
              break;
            case 500:
              message = 'Server error!';
              break;
            default:
              message = 'Sorry! The request could not be processed!';
          }
          this.notifyService.showError(message);
          this.actionDeterminate.setCreateDeterminate('Error');
          return throwError(error);
        }),
      );
  }
}
