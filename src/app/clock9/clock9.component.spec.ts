import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Clock9Component } from './clock9.component';

describe('Clock9Component', () => {
  let component: Clock9Component;
  let fixture: ComponentFixture<Clock9Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Clock9Component]
    });
    fixture = TestBed.createComponent(Clock9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
