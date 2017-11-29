import { TestBed, inject } from '@angular/core/testing';

import { MapItService } from './map-it.service';

describe('MapItService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MapItService]
    });
  });

  it('should be created', inject([MapItService], (service: MapItService) => {
    expect(service).toBeTruthy();
  }));
});
