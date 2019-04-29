import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ExpressionsService {

  /*expressions = [
    {name: "addition", rule: "^[0-9][+][0-9]+$"},
    {name: "subtraction", rule: "^[0-9][-][0-9]+$"},
    {name: "division", rule: "^[0-9][/][0-9]+$"},
    {name: "multiplication", rule: "^[0-9][8][0-9]+$"},
    {name: "sin", rule: "^[sin]+[(]+[0-9]+[)]+$", method:"Math.sin"},
    {name: "cos", rule: "^[cos]+[(]+[0-9]+[)]+$", method:"Math.cos"},
    {name: "tan", rule: "^[tan]+[(]+[0-9]+[)]+$", method:"Math.tan"}
  ];*/

  expressions = [
    {name: "basic", rule: "[+-/*][0-9]+$", method:null},
    {name: "sin", rule:"^(sin)[(][0-9]*[)]+$", method:"Math.sin"},
    {name: "cos", rule:"^(cos)[(][0-9]*[)]+$", method:"Math.cos"},
    {name: "tan", rule:"^(tan)[(][0-9]*[)]+$", method:"Math.tan"}
  ];

  savedExpressions = [];
  numberGenerated = null;
  numberGeneratorUrl = "https://www.random.org/integers/?num=1&min=1&max=100&col=1&base=10&format=plain&rnd=new";

  constructor(private httpClient: HttpClient) {

  }

  getRandomNumber(): Promise<String> {

     var vale = this.httpClient.get(this.numberGeneratorUrl).toPromise().then(response => {
        return response;
      }).catch(err => {
        return null;
      });
    return vale;
  }

  validateExpressions(expression) {
    var trimmedExpression = expression.replace(/ /g, '');
    var regexp;
    var ruleTriggered = null;

    this.expressions.forEach((currentRule) =>{
      regexp = new RegExp(currentRule.rule);
      (regexp.test(trimmedExpression)) ? ruleTriggered = `valid` : "";
    })

    return ruleTriggered;
  }

  validateExpression(expression){
    return this.validateExpressions(expression);
  }

  evaluateExpression(expression){
    if(this.validateExpressions(expression) != null){
      var finalEval = null;
      this.expressions.forEach((currentRule) =>{
        if(expression.indexOf(currentRule.name) !== -1 && currentRule.method !== null)
          finalEval = expression.replace(currentRule.name, currentRule.method);
      });

      return finalEval != null ? eval(finalEval) : eval(expression);
    }
  }
}
