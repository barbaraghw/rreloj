import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Clock3Component } from './clock3.component';

describe('Clock3Component', () => {
  let component: Clock3Component;
  let fixture: ComponentFixture<Clock3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Clock3Component]
    });
    fixture = TestBed.createComponent(Clock3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
