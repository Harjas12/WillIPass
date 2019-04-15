import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-calculator-page",
  templateUrl: "./calculator-page.component.html",
  styleUrls: ["./calculator-page.component.css"]
})
export class CalculatorPageComponent implements OnInit {
  classesArray: Array<any> = [];
  newClass: any = {};

  constructor() {}

  ngOnInit() {}

  addNewClass() {
    this.classesArray.push(this.newClass);
    this.newClass = {};
  }

  deleteClass(index) {
    this.classesArray.splice(index);
  }
}
