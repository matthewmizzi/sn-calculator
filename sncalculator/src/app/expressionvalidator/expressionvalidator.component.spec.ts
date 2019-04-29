import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpressionvalidatorComponent } from './expressionvalidator.component';

describe('ExpressionvalidatorComponent', () => {
  let component: ExpressionvalidatorComponent;
  let fixture: ComponentFixture<ExpressionvalidatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpressionvalidatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpressionvalidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
