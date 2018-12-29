import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StarslistComponent } from './starslist.component';

describe('StarslistComponent', () => {
  let component: StarslistComponent;
  let fixture: ComponentFixture<StarslistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StarslistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StarslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
