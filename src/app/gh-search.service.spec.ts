import { TestBed } from '@angular/core/testing';

import { GhSearchService } from './gh-search.service';

describe('GhSearchService', () => {
  let service: GhSearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GhSearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
