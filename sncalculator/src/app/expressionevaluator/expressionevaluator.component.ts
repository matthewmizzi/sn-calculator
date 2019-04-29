import { Component, OnInit } from '@angular/core';
import { ExpressionsService } from './../expressions.service';

@Component({
  selector: 'app-expressionevaluator',
  templateUrl: './expressionevaluator.component.html',
  styleUrls: ['./expressionevaluator.component.scss'],
  providers: [ExpressionsService]
})
export class ExpressionevaluatorComponent implements OnInit {

  result = null;
  userInput = null;

  constructor(private data: ExpressionsService) { }

  ngOnInit() {
  }

  evaluate(){
    this.result = this.data.evaluateExpression(this.userInput);
  }

}
