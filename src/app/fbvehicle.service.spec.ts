import { TestBed, inject } from '@angular/core/testing';

import { FBVehicleService } from './fbvehicle.service';

describe('FBVehicleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FBVehicleService]
    });
  });

  it('should be created', inject([FBVehicleService], (service: FBVehicleService) => {
    expect(service).toBeTruthy();
  }));
});
