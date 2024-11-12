import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Clock10Component } from './clock10.component';

describe('Clock10Component', () => {
  let component: Clock10Component;
  let fixture: ComponentFixture<Clock10Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Clock10Component]
    });
    fixture = TestBed.createComponent(Clock10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
