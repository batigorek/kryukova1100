import { TestBed } from '@angular/core/testing';

import { MgoodsService } from './mgoods.service';

describe('MgoodsService', () => {
  let service: MgoodsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MgoodsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
