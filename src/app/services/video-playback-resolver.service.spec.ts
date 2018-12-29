import { TestBed } from '@angular/core/testing';

import { VideoPlaybackResolverService } from './video-playback-resolver.service';

describe('VideoPlaybackResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VideoPlaybackResolverService = TestBed.get(VideoPlaybackResolverService);
    expect(service).toBeTruthy();
  });
});
