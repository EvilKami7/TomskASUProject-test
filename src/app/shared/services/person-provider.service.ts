import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseDataService } from '../../core/services/base-data.service';
import { Person } from '../models/person.model';
import { API_URL } from '../constants/api-url.constants';

@Injectable()
export class PersonProviderService extends BaseDataService<Person> {
  constructor(private httpClient: HttpClient) {
    super(httpClient);
  }

  getPersonById(id: string): void {
    this.getData(API_URL.PERSON_BY_ID(id));
  }
}
