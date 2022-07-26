import { TestBed } from '@angular/core/testing';

import { ReciptApiService } from './recipt-api.service';

describe('ReciptApiService', () => {
  let service: ReciptApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReciptApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
