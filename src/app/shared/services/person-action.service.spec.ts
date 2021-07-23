import { TestBed } from '@angular/core/testing';

import { PersonActionService } from './person-action.service';

describe('PersonActionService', () => {
  let service: PersonActionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersonActionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
