import { TestBed } from '@angular/core/testing';

import { EmbedVideoResolverService } from './embed-video-resolver.service';

describe('EmbedVideoResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmbedVideoResolverService = TestBed.get(EmbedVideoResolverService);
    expect(service).toBeTruthy();
  });
});
