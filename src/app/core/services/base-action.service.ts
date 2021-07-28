import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpAction } from '../types/http-action.type';
import { CallbackObject } from '../models/callback-object.model';
import { HttpOptions } from '../models/http-options.model';

@Injectable({
  providedIn: 'root',
})
export abstract class BaseActionService {
  constructor(private httpClient: HttpClient) { }

  sendAction(method: HttpAction, path: string, callbackObject?: CallbackObject, options?: HttpOptions): void {
    this.httpClient.request(method, path, options).subscribe(
      (value) => {
        if (callbackObject && callbackObject.onSuccess) {
          callbackObject.onSuccess(value);
        }
      },
    );
  }
}
