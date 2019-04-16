import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { AuthHandlerService } from "../auth-handler.service";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class GradeHandlerService {
  gradeHeader = new HttpHeaders();

  constructor(
    private http: HttpClient,
    private router: Router,
    private auth: AuthHandlerService
  ) {
    this.gradeHeader.append("Content-Type", "application/json");
    this.gradeHeader.append(
      "authorization",
      "bearer " + localStorage.getItem("token")
    );
    console.log(localStorage.getItem("token"));
  }

  httpOptions = {
    headers: this.gradeHeader
  };

  sendGrades(input) {
    const req = this.http
      .post(
        "https://willipass.herokuapp.com/api/grades",
        input,
        this.httpOptions
      )
      .subscribe(
        data => {
          console.log("success", data);
        },
        err => {
          console.log("error", err);
        }
      );
  }

  getGrades() {
    const req = this.http
      .get("https://willipass.herokuapp.com/api/grades", this.httpOptions)
      .subscribe(
        data => {
          console.log("success", data);
        },
        err => {
          console.log("error", err);
        }
      );
  }
}
