import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})

export class ErrMsgService {
  loginStatus = true;

  constructor() {}

  setLoginStatus(val) {
    this.loginStatus = val;
  }

  getLoginStatus() {
    return this.loginStatus;
  }
}
