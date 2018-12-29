import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoPlaybackComponent } from './video-playback.component';

describe('VideoPlaybackComponent', () => {
  let component: VideoPlaybackComponent;
  let fixture: ComponentFixture<VideoPlaybackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoPlaybackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoPlaybackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
