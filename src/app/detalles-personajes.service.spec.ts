import { TestBed } from '@angular/core/testing';

import { DetallesPersonajesService } from './detalles-personajes.service';

describe('DetallesPersonajesService', () => {
  let service: DetallesPersonajesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetallesPersonajesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
