import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { HttpHeaders } from "@angular/common/http";
import { Router } from "@angular/router"

@Injectable({
  providedIn: "root"
})
export class AuthHandlerService {
  constructor(private http: HttpClient, private router: Router) {}

  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json"
    })
  };

  login(input) {
    const req = this.http
      .post(
        "http://willipass.herokuapp.com/api/login",
        input,
        this.httpOptions
      )
      .subscribe(
        data => {
          console.log("success", data);
          localStorage.setItem("id_token", data['token']);
        },
        err => {
          console.log("error", err);
        }
      );
  }

  create(input) {
    const req = this.http
    .post (
      "http://willipass.herokuapp.com/api/create",
      input,
      this.httpOptions
    )
    .subscribe(
      data => {
        console.log("success", data);
        let obj = JSON.stringify(data);
        let jwtVal = JSON.parse(obj).token;
        localStorage.setItem("token", jwtVal);
        this.router.navigate(["/login"])
      },
      err => {
        console.log("error", err);
        alert("");
      }
    );
  }

}