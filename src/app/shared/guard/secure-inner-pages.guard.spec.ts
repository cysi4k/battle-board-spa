import { TestBed, async, inject } from '@angular/core/testing';

import { SecureInnerPagesGuard } from './secure-inner-pages.guard';

describe('SecureInnerPages.Guard.TsGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SecureInnerPagesGuard]
    });
  });

  it('should ...', inject([SecureInnerPagesGuard], (guard: SecureInnerPagesGuard) => {
    expect(guard).toBeTruthy();
  }));
});
