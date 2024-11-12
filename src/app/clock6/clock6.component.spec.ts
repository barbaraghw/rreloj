import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Clock6Component } from './clock6.component';

describe('Clock6Component', () => {
  let component: Clock6Component;
  let fixture: ComponentFixture<Clock6Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Clock6Component]
    });
    fixture = TestBed.createComponent(Clock6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
