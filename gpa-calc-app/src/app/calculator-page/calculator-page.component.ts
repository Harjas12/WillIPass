import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ErrMsgService } from "../err-msg.service";
import { GradeHandlerService } from "./grade-handler.service";
import { catchError } from 'rxjs/operators';


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

  constructor(
    private errHandler: ErrMsgService,
    private grader: GradeHandlerService,
    private route: Router
  ) {}

  ngOnInit() {
    // Determine if they are logged in
    this.errHandler.setLoginStatus();
    if (this.errHandler.getLoginStatus() === false) {
      this.route.navigate([""]);
    }

    // Populate page
    this.newClassGrade = "A";
    this.newClassName = "";
    this.newClassCredits = 3;
  }

  addNewClass() {
    console.log(this.newClassName);
    console.log(this.newClassGrade);
    this.classesArray.push({
      name: this.newClassName,
      grade: this.newClassGrade,
      credits: this.newClassCredits
    });
    this.newClassGrade = "A";
    this.newClassName = "";
    this.newClassCredits = 3;
  }

  deleteClass(index) {
    this.classesArray.splice(index, 1);
  }

  computeGPA(grades) {
    let totalQualityPoints = 0;
    let totalQualityPointsEarned = 0;
    for (let i = 0; i < grades.length; i++) {
      const weight = this.getGradeWeight(grades[i].grade);
      totalQualityPoints += 4.0 * grades[i].credits;
      totalQualityPointsEarned += weight * grades[i].credits;
    }
    if(totalQualityPoints != 0) {
      return 4.0 * (totalQualityPointsEarned / totalQualityPoints);
    } else {
      return 4.0;
    }
  }

  getGradeWeight(grade: string) {
    if (grade == "A") return 4.0;
    if (grade == "A-") return 3.7;
    if (grade == "B+") return 3.3;
    if (grade == "B") return 3.0;
    if (grade == "B-") return 2.7;
    if (grade == "C+") return 2.3;
    if (grade == "C") return 2.0;
    if (grade == "C-") return 1.7;
    if (grade == "D+") return 1.3;
    if (grade == "D") return 1.0;
    if (grade == "D-") return 0.7;
    return 0.0;
  }

  saveGrades() {
    const classes = JSON.stringify(this.classesArray);
    const data = JSON.stringify({
      grades: classes
    });
    console.log(data);
    this.grader.sendGrades(data).pipe(
      catchError((err, caught) => {
        alert("save failed");
        return [];
      })
    ).subscribe();
  }

  getGrades() {
    this.grader.getGrades().pipe(
      catchError((err, caught) => {
        alert("failed to load grades");
        return [];
      })
    ).subscribe(grades => {
      console.log(grades);
    });
  }
}
