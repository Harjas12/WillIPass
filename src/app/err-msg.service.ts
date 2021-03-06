import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class ErrMsgService {
  loginStatus = true;

  constructor() {}

  getLoginStatus() {
    return this.loginStatus;
  }

  setLoginStatus() {
    if (localStorage.getItem("token") !== null) {
      this.loginStatus = true;
    } else {
      this.loginStatus = false;
    }
  }
}
