import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculatorsettingsService {

  controls = ["+","-","*","/","9","8","7","6","5","4","3","2","1", "0"];

  constructor() { }

  getControls() {
    return this.controls;
  }
}
