import { ExpressionsService } from './../expressions.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-suprcalculator',
  templateUrl: './suprcalculator.component.html',
  styleUrls: ['./suprcalculator.component.scss'],
  providers: [ExpressionsService]
})
export class SuprcalculatorComponent implements OnInit {

  displayedInput = "0";
  displayedOutput = "0";

  constructor(private data: ExpressionsService) {
    this.data.getRandomNumber().then(response => {
        this.displayedInput = String(response);
    });
   }

  ngOnInit() {
  
  }

  keyPress(event){
    this.displayedInput += event.control;
    this.displayedOutput = this.data.evaluateExpression(this.displayedInput);
  }

  removeLast(){
    this.displayedInput.length >= 1 ? 
      this.displayedInput = this.displayedInput.slice(0, this.displayedInput.length - 1): 
      null;
    this.displayedOutput = this.data.evaluateExpression(this.displayedInput);
  }
}
