import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators, FormGroup } from "@angular/forms";
import { AuthHandlerService } from "../auth-handler.service";
import { ErrMsgService } from "../err-msg.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  newLoginForm: FormGroup;
  errMsg = false;

  constructor(
    private fb: FormBuilder,
    private loginService: AuthHandlerService,
    private errHandler: ErrMsgService
  ) {
    this.newLoginForm = this.fb.group({
      username: ["", Validators.required],
      password: ["", Validators.required]
    });
  }

  onLogin() {
    const formObj = this.newLoginForm.getRawValue();
    const serializedForm = JSON.stringify(formObj);
    this.loginService.login(serializedForm);
    this.errMsg = this.errHandler.getLoginStatus();
  }

  ngOnInit() {}
}
