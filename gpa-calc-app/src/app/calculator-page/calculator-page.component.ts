import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-calculator-page",
  templateUrl: "./calculator-page.component.html",
  styleUrls: ["./calculator-page.component.css"]
})
export class CalculatorPageComponent implements OnInit {
  classesArray: Array<any> = [];
  newClassGrade: string;
  newClassName: string;
  newClassCredits: number;
  gpa: number;

  constructor() {}

  ngOnInit() {
    this.newClassGrade = "A";
    this.newClassName = "";
    this.newClassCredits = 3;
    this.gpa = 4.0;
  }

  addNewClass() {
    console.log(this.newClassName);
    console.log(this.newClassGrade);
    this.classesArray.push({"name": this.newClassName, "grade": this.newClassGrade, "credits": this.newClassCredits});
    this.newClassGrade = "A";
    this.newClassName = "";
    this.newClassCredits = 3;
    this.recomputeGPA();
  }

  deleteClass(index) {
    this.classesArray.splice(index, 1);
    this.recomputeGPA();
  }

  recomputeGPA() {
    let totalQualityPoints = 0;
    let totalQualityPointsEarned = 0;
    for(let i = 0; i < this.classesArray.length; i++) {
      const weight = this.getGradeWeight(this.classesArray[i].grade);
      totalQualityPoints += 4.0 * this.classesArray[i].credits;
      totalQualityPointsEarned += weight * this.classesArray[i].credits;
    }
    this.gpa = 4.0 * (totalQualityPointsEarned / totalQualityPoints);
  }

  getGradeWeight(grade: string) {
    if(grade == "A") return 4.0;
    if(grade == "A-") return 3.7;
    if(grade == "B+") return 3.3;
    if(grade == "B") return 3.0;
    if(grade == "B-") return 2.7;
    if(grade == "C+") return 2.3;
    if(grade == "C") return 2.0;
    if(grade == "C-") return 1.7;
    if(grade == "D+") return 1.3;
    if(grade == "D") return 1.0;
    if(grade == "D-") return 0.7;
    return 0.0;
  }

}
