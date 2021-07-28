import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseActionService } from '../../core/services/base-action.service';
import { PersonRequest } from '../models/person-request.model';
import { API_URL } from '../constants/api-url.constants';
import { CallbackObject } from '../../core/models/callback-object.model';
import { Person } from '../models/person.model';
import { NotificationService } from './notification.service';
import { ActionDeterminateService } from './action-determinate.service';

@Injectable()
export class PersonActionService extends BaseActionService {
  constructor(httpClient: HttpClient,
    private notifyService: NotificationService,
    private actionDeterminate: ActionDeterminateService) {
    super(httpClient);
  }

  createPerson(person: PersonRequest): void {
    const { notifyService } = this;
    const { actionDeterminate } = this;
    const action: CallbackObject = {
      onSuccess() {
        notifyService.showSuccess('Person created');
        actionDeterminate.setCreateDeterminate('Success');
      },
    };
    this.sendAction('POST', API_URL.PERSONS, action, { body: person });
  }

  updatePerson(id: string, person: Person): void {
    const { notifyService } = this;
    const { actionDeterminate } = this;
    const action: CallbackObject = {
      onSuccess() {
        notifyService.showSuccess('Person updated');
        actionDeterminate.setEditDeterminate('Success');
      },
    };
    this.sendAction('PATCH', API_URL.PERSON_BY_ID(id), action, { body: person });
  }

  deletePerson(id: string, callback: () => void): void {
    const { notifyService } = this;
    const action: CallbackObject = {
      onSuccess() {
        callback();
        notifyService.showSuccess('Person deleted');
      },
    };
    this.sendAction('DELETE', API_URL.PERSON_BY_ID(id), action);
  }
}
