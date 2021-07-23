import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpOptions } from '../models/http-options.model';

export abstract class BaseDataService<T> {
  data$: Observable<T>;
  private subject = new Subject<T>();
  protected constructor(private http: HttpClient) {
    this.data$ = this.subject.asObservable();
  }

  getData(path: string, options?: HttpOptions): void {
    this.http.get<T>(path, options).subscribe((data: T) => {
      this.subject.next(data);
    });
  }
}
