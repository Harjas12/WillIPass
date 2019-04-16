import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class AuthHandlerService {
  constructor(private http: HttpClient) {}

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
          console.log("success", data);
          // localStorage.setItem("id_token", res.token);
        },
        err => {
          console.log("error", err);
        }
      );
  }
}
