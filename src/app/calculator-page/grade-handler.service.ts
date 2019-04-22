import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { AuthHandlerService } from "../auth-handler.service";
import { Router } from "@angular/router";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class GradeHandlerService {
  constructor(
    private http: HttpClient,
    private router: Router,
    private auth: AuthHandlerService
  ) {}

  sendGrades(input) {
    const req = this.http.post(
      "/api/grades",
      input,
      { headers: this.makeHeader }
    );
    return req;
  }

  getGrades() {
    const req = this.http
      .get("/api/grades", {
        headers: this.makeHeader
      })
      .pipe(map(res => res["classes"]));
    return req;
  }

  get makeHeader() {
    let gradeHeader = new HttpHeaders();
    gradeHeader = gradeHeader.set("Content-Type", "application/json");
    gradeHeader = gradeHeader.set(
      "authorization",
      "bearer " + localStorage.getItem("token")
    );
    console.log(localStorage.getItem("token"));
    return gradeHeader;
  }
}
