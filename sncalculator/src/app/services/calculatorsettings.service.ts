import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculatorsettingsService {

  //controls = ["+","-","*","/","9","8","7","6","5","4","3","2","1", "0"];
  controls = [
    {control: "+", class: "button-tertiary"},
    {control: "-", class: "button-tertiary"},
    {control: "*", class: "button-tertiary"},
    {control: "/", class: "button-tertiary"},
    {control: "9", class: ""},
    {control: "8", class: ""},
    {control: "7", class: ""},
    {control: "6", class: ""},
    {control: "5", class: ""},
    {control: "4", class: ""},
    {control: "3", class: ""},
    {control: "2", class: ""},
    {control: "1", class: ""},
    {control: "0", class: ""},
  ];

  constructor() { }

  getControls() {
    return this.controls;
  }
}
