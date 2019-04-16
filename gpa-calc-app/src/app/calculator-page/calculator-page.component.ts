import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-calculator-page",
  templateUrl: "./calculator-page.component.html",
  styleUrls: ["./calculator-page.component.css"]
})
export class CalculatorPageComponent implements OnInit {
  classesArray: Array<any> = [];
  newClass: any = {};
  newClassGrade: string;
  newClassName: string;

  constructor() {}

  ngOnInit() {}

  addNewClass() {
    this.classesArray.push({"name": this.newClassName, "grade": this.newClassGrade});
    this.newClass = {};
    this.newClassGrade = "";
    this.newClassName = "";
  }

  deleteClass(index) {
    this.classesArray.splice(index, 1);
  }
}
