import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Clock1Component } from './clock1.component';

describe('Clock1Component', () => {
  let component: Clock1Component;
  let fixture: ComponentFixture<Clock1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Clock1Component]
    });
    fixture = TestBed.createComponent(Clock1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
