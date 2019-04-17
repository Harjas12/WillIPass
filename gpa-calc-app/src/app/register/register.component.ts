import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { template } from '@angular/core/src/render3/instructions';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AuthHandlerService } from "../auth-handler.service";
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {NgModule} from "@angular/core"


@NgModule({
  imports: [MatButtonModule, MatCheckboxModule],
  exports: [MatButtonModule, MatCheckboxModule],
})
export class MyOwnCustomMaterialModule { }


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  newRegForm: FormGroup;
  title = 'Registration Page';
  username: string = "";
  password: string = "";
  firstname: string = "";
  lastname: string = "";

  constructor(private fb: FormBuilder, private registerService: AuthHandlerService) {
    this.newRegForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      firstname: ['', Validators.required],
      lastname: ['', Validators.required]
    });
  }

  ngOnInit() {

  }

  onRegister() {
    const formObj = this.newRegForm.getRawValue();
    const serializedform = JSON.stringify(formObj);
    this.registerService.create(serializedform);
    console.log(serializedform);
  }

}
