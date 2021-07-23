import { TestBed } from '@angular/core/testing';

import { PersonProviderService } from './person-provider.service';

describe('PersonProviderService', () => {
  let service: PersonProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersonProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
