import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoslistComponent } from './videoslist.component';

describe('VideoslistComponent', () => {
  let component: VideoslistComponent;
  let fixture: ComponentFixture<VideoslistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoslistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
