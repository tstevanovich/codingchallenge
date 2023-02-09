import { TestBed } from '@angular/core/testing';

import { EquipmentValueService } from './equipment-value.service';

describe('EquipmentValueService', () => {
  let service: EquipmentValueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EquipmentValueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
