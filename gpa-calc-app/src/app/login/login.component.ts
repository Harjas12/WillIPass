import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators, FormGroup } from "@angular/forms";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  newLoginForm: FormGroup;
  username: string = "";
  password: string = "";

  constructor(private fb: FormBuilder) {
    this.newLoginForm = this.fb.group({
      username: ["", Validators.required],
      password: ["", Validators.required]
    });
  }

  onLogin() {
    this.username = this.newLoginForm.get("username").value;
    this.password = this.newLoginForm.get("password").value;
  }

  ngOnInit() {}
}
