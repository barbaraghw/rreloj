import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Clock7Component } from './clock7.component';

describe('Clock7Component', () => {
  let component: Clock7Component;
  let fixture: ComponentFixture<Clock7Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Clock7Component]
    });
    fixture = TestBed.createComponent(Clock7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
