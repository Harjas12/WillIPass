import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { CustomMaterialModule } from "./material.module";

import { CommonModule } from "@angular/common";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";

import { NgCircleProgressModule } from 'ng-circle-progress';

//Pages
import { RegisterComponent } from "./register/register.component";
import { LoginComponent } from "./login/login.component";
import { HomeComponent } from "./home/home.component";
import { CalculatorPageComponent } from "./calculator-page/calculator-page.component";
import { MaterialModule } from "./material";
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    CalculatorPageComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgCircleProgressModule.forRoot(),
    BrowserAnimationsModule,
    MaterialModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule
    CustomMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}