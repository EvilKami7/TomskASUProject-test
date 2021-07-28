import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpOptions } from '../models/http-options.model';

export abstract class BaseDataService<T> {
  protected constructor(private http: HttpClient) {}

  getData(path: string, options?: HttpOptions): Observable<T> {
    return this.http.get<T>(path, options);
  }
}
