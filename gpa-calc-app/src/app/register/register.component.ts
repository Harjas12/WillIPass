import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { template } from '@angular/core/src/render3/instructions';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  newRegForm: FormGroup;
  title = 'Registration Page';
  firstName: string = "";
  lastName: string = "";
  userName: string = "";
  passWord: string = "";

  constructor(private fb: FormBuilder) {
    this.newRegForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      userName: ['', Validators.required],
      passWord: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  onRegister() {
    this.firstName = this.newRegForm.get("firstName").value;
    this.lastName = this.newRegForm.get("lastName").value;
    this.userName = this.newRegForm.get("userName").value;
    this.passWord = this.newRegForm.get("passWord").value;
    console.log(this.firstName)
    console.log(this.lastName)
    console.log(this.userName)
    console.log(this.passWord)
  }

}
