import { TestBed } from '@angular/core/testing';

import { AnimexApiService } from './animex-api.service';

describe('AnimexApiService', () => {
  let service: AnimexApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnimexApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
