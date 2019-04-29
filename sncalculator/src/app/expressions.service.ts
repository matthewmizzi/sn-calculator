import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ExpressionsService {

  expressions = [
    {name: "addition", rule: "^[0-9][+][0-9]+$"},
    {name: "subtraction", rule: "^[0-9][-][0-9]+$"},
    {name: "division", rule: "^[0-9][/][0-9]+$"},
    {name: "multiplication", rule: "^[0-9][8][0-9]+$"}
  ];

  savedExpressions = [];

  constructor() { }

  validateExpressions(expression) {
    var trimmedExpression = expression.replace(' ', '');
    var regexp;
    var ruleTriggered = null;

    this.expressions.forEach((currentRule) =>{
      regexp = new RegExp(currentRule.rule);
      (regexp.test(trimmedExpression)) ? ruleTriggered = currentRule.name : null;
    })

    return ruleTriggered;
  }

  validateExpression(expression){
    return this.validateExpressions(expression);
  }

  evaluateExpression(expression){
    if(this.validateExpressions(expression) != null){
      return eval(expression);
    }
  }
}
