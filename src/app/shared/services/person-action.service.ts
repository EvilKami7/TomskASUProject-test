import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseActionService } from '../../core/services/base-action.service';
import { PersonRequest } from '../models/person-request.model';
import { API_URL } from '../constants/api-url.constants';
import { CallbackObject } from '../../core/models/callback-object.model';
import { Person } from '../models/person.model';

@Injectable({
  providedIn: 'root',
})
export class PersonActionService extends BaseActionService {
  constructor(httpClient: HttpClient) {
    super(httpClient);
  }

  createPerson(person: PersonRequest, callback: () => void): void {
    const action: CallbackObject = {
      onSuccess() {
        callback();
      },
    };
    this.sendAction('POST', API_URL.PERSONS, action, { body: person });
  }

  updatePerson(id: string, person: Person, callback: () => void): void {
    const action: CallbackObject = {
      onSuccess() {
        callback();
      },
    };
    this.sendAction('PATCH', API_URL.PERSON_BY_ID(id), action, { body: person });
  }

  deletePerson(id: string, callback: () => void): void {
    const action: CallbackObject = {
      onSuccess() {
        callback();
      },
    };
    this.sendAction('DELETE', API_URL.PERSON_BY_ID(id), action);
  }
}
