import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class AuthHandlerService {
  // private url = "http://data.cs.purdue.edu:";

  constructor(private http: HttpClient) {}

  login(user, pass) {
    // credentials is JSON
    // const req = this.http
    //   .post(url, {
    //     username: user,
    //     pasword: pass
    //   })
    //   .subscribe(
    //     res => {
    //       console.log(res);
    //       localStorage.setItem("id_token", res.token);
    //     },
    //     err => {
    //       console.log("Error occured");
    //     }
    //   );
  }
}
