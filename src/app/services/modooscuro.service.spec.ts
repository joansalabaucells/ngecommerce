import { TestBed } from '@angular/core/testing';

import { ModooscuroService } from './modooscuro.service';

describe('ModooscuroService', () => {
  let service: ModooscuroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModooscuroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
