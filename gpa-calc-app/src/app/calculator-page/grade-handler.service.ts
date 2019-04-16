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
    this.gradeHeader =  this.gradeHeader.set("Content-Type", "application/json");
    this.gradeHeader = this.gradeHeader.set(
      "authorization",
      "bearer " + localStorage.getItem("token")
    );
    console.log(localStorage.getItem("token"));
  }

  sendGrades(input) {
    const req = this.http
      .post(
        "https://willipass.herokuapp.com/api/grades",
        input,
        {headers: this.gradeHeader}
        // this.httpOptions
      );
    return req;
  }

  getGrades() {
    const req = this.http
      .get("https://willipass.herokuapp.com/api/grades", {headers: this.gradeHeader});
    return req;
  }
}
