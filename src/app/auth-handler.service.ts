import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class AuthHandlerService {
  constructor(
    private http: HttpClient,
    private router: Router,
  ) {}

  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json"
    })
  };

  login(input) {
    const req = this.http
      .post(
        "/api/login",
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

  create(input) {
    const req = this.http
    .post (
      "/api/create",
      input,
      this.httpOptions
    )
    .subscribe(
      data => {
        console.log("success", data);
        this.router.navigate(["/login"])
      },
      err => {
        console.log("error", err);
        alert("Username is already taken, please try again.");
      }
    );
  }

  logout(){
    
  }

}
