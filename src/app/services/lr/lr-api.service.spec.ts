import { TestBed } from '@angular/core/testing';

import { LrApiService } from './lr-api.service';

describe('LrApiService', () => {
  let service: LrApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LrApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
