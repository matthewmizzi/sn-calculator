import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpressionevaluatorComponent } from './expressionevaluator.component';

describe('ExpressionevaluatorComponent', () => {
  let component: ExpressionevaluatorComponent;
  let fixture: ComponentFixture<ExpressionevaluatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpressionevaluatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpressionevaluatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
