import { CalculatorsettingsService } from './../../services/calculatorsettings.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-calcinputs',
  templateUrl: './calcinputs.component.html',
  styleUrls: ['./calcinputs.component.scss'],
  providers: [CalculatorsettingsService]
})
export class CalcinputsComponent implements OnInit {

  @Output() clickedInput: EventEmitter<string> = new EventEmitter<string>();

  inputs = null;

  constructor(private data: CalculatorsettingsService) { 
    this.inputs = data.getControls();
  }

  ngOnInit() {
  }

  onInputClicked(calcInput){
    this.clickedInput.emit(calcInput);
  }

}
