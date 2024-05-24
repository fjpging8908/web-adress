import { TestBed } from '@angular/core/testing';

import { AdresApiService } from './adres-api.service';

describe('AdresApiService', () => {
  let service: AdresApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdresApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
