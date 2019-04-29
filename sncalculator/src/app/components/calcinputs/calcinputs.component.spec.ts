import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcinputsComponent } from './calcinputs.component';

describe('CalcinputsComponent', () => {
  let component: CalcinputsComponent;
  let fixture: ComponentFixture<CalcinputsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalcinputsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalcinputsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
