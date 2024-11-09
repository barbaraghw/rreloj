import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Clock4Component } from './clock4.component';

describe('Clock4Component', () => {
  let component: Clock4Component;
  let fixture: ComponentFixture<Clock4Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Clock4Component]
    });
    fixture = TestBed.createComponent(Clock4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
