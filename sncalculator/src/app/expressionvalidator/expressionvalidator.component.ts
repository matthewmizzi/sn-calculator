import { Component, OnInit } from '@angular/core';
import { ExpressionsService } from './../expressions.service';

@Component({
  selector: 'app-expressionvalidator',
  templateUrl: './expressionvalidator.component.html',
  styleUrls: ['./expressionvalidator.component.scss'],
  providers: [ExpressionsService]
})
export class ExpressionvalidatorComponent implements OnInit {

  expressions = null;
  result = null;

  constructor(private data: ExpressionsService) { }

  ngOnInit() {
  }

  keyPress(event){
    this.result = this.data.validateExpression(event.target.value);
  }

}
