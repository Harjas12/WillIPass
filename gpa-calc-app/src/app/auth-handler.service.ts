import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Router } from "@angular/router";
import { ErrMsgService } from "./err-msg.service";

@Injectable({
  providedIn: "root"
})
export class AuthHandlerService {
  constructor(
    private http: HttpClient,
    private router: Router,
    private errMsg: ErrMsgService
  ) {}

  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json"
    })
  };

  login(input) {
    const req = this.http
      .post(
        "https://willipass.herokuapp.com/api/login",
        input,
        this.httpOptions
      )
      .subscribe(
        data => {
          //set local cookie
          console.log("success", data);
          let obj = JSON.stringify(data);
          let jwtVal = JSON.parse(obj).token;
          localStorage.setItem("token", jwtVal);

          //Change page
          this.router.navigate(["/calc"]);
        },
        err => {
          console.log("error", err);
        }
      );
  }

  authToken() {
    let data = JSON.parse(localStorage.getItem("token"));
    if (data === null) {
      return null;
    }
    return data.token;
  }
}
