import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Clock5Component } from './clock5.component';

describe('Clock5Component', () => {
  let component: Clock5Component;
  let fixture: ComponentFixture<Clock5Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Clock5Component]
    });
    fixture = TestBed.createComponent(Clock5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
