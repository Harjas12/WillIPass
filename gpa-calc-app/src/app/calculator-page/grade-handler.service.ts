import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { AuthHandlerService } from "../auth-handler.service";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class GradeHandlerService {
  constructor(
    private http: HttpClient,
    private router: Router,
    private auth: AuthHandlerService
  ) {}

  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      token: this.auth.authToken
    })
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
}
