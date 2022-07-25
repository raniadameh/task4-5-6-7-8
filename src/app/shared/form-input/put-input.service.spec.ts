import { TestBed } from '@angular/core/testing';

import { PutInputService } from './put-input.service';

describe('PutInputService', () => {
  let service: PutInputService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PutInputService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
