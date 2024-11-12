import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Clock8Component } from './clock8.component';

describe('Clock8Component', () => {
  let component: Clock8Component;
  let fixture: ComponentFixture<Clock8Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Clock8Component]
    });
    fixture = TestBed.createComponent(Clock8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
