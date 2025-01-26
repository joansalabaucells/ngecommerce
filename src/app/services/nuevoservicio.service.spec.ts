import { TestBed } from '@angular/core/testing';

import { NuevoservicioService } from './nuevoservicio.service';

describe('NuevoservicioService', () => {
  let service: NuevoservicioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NuevoservicioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
