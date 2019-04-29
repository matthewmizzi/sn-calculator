import { Component, OnInit } from '@angular/core';
import { ExpressionsService } from '../expressions.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss'],
  providers: [ExpressionsService]
})
export class CalculatorComponent implements OnInit {

  result = null;

  constructor(private data: ExpressionsService) { }

  ngOnInit() {
  }

  keyPress(event){
    this.result = this.data.evaluateExpression(event.target.value);
  }

}
