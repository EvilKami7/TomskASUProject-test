import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseDataService } from '../../core/services/base-data.service';
import { Person } from '../models/person.model';
import { API_URL } from '../constants/api-url.constants';

@Injectable()
export class PersonsProviderService extends BaseDataService<Person[]> {
  constructor(private httpClient: HttpClient) {
    super(httpClient);
  }

  getPersons(): void {
    this.getData(API_URL.PERSONS);
  }
}
