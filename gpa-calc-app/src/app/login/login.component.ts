import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators, FormGroup } from "@angular/forms";
import { AuthHandlerService } from "../auth-handler.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  newLoginForm: FormGroup;
  username: string = "";
  password: string = "";

  constructor(
    private fb: FormBuilder,
    private loginService: AuthHandlerService
  ) {
    this.newLoginForm = this.fb.group({
      username: ["", Validators.required],
      password: ["", Validators.required]
    });
  }

  onLogin() {
    // this.username = this.newLoginForm.get("username").value;
    // this.password = this.newLoginForm.get("password").value;
    // this.loginService.login(this.username, this.loginService);
    let formObj = this.newLoginForm.getRawValue();
    let serializedForm = JSON.stringify(formObj);
    console.log(serializedForm);
    this.loginService.login(serializedForm);
  }

  ngOnInit() {}
}
