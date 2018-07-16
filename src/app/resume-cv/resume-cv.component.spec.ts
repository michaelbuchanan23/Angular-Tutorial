import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeCvComponent } from './resume-cv.component';

describe('ResumeCvComponent', () => {
  let component: ResumeCvComponent;
  let fixture: ComponentFixture<ResumeCvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResumeCvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeCvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
