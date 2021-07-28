import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BaseDataService } from '../../core/services/base-data.service';
import { Person } from '../models/person.model';
import { API_URL } from '../constants/api-url.constants';

@Injectable()
export class PersonsProviderService extends BaseDataService<Person[]> {
  constructor(private httpClient: HttpClient) {
    super(httpClient);
  }

  getPersons(): Observable<Person[]> {
    return this.getData(API_URL.PERSONS).pipe(map((response: Person[]) => response));
  }
}
