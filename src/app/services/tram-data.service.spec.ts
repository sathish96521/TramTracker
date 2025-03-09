import { TestBed } from '@angular/core/testing';

import { TramDataService } from './tram-data.service';

describe('TramDataService', () => {
  let service: TramDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TramDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
