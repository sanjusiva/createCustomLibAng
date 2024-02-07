import { TestBed } from '@angular/core/testing';

import { BtsCustomLibService } from './bts-custom-lib.service';

describe('BtsCustomLibService', () => {
  let service: BtsCustomLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BtsCustomLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
