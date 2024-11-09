import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Clock2Component } from './clock2.component';

describe('Clock2Component', () => {
  let component: Clock2Component;
  let fixture: ComponentFixture<Clock2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Clock2Component]
    });
    fixture = TestBed.createComponent(Clock2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
