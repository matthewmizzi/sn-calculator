import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuprcalculatorComponent } from './suprcalculator.component';

describe('SuprcalculatorComponent', () => {
  let component: SuprcalculatorComponent;
  let fixture: ComponentFixture<SuprcalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuprcalculatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuprcalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
