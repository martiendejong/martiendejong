import { TestBed } from '@angular/core/testing';

import { FittextService } from './fittext.service';

describe('FittextService', () => {
  let service: FittextService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FittextService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
