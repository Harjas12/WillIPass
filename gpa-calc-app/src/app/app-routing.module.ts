import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

// Pages
import { LoginComponent } from "./login/login.component";
import { HomeComponent } from "./home/home.component";
import { CalculatorPageComponent } from "./calculator-page/calculator-page.component";
import { RegisterComponent } from "./register/register.component";

// Routing
const routes: Routes = [
  { path: "", component: HomeComponent, pathMatch: "full" },
  { path: "login", component: LoginComponent, pathMatch: "full" },
  { path: "calc", component: CalculatorPageComponent, pathMatch: "full" },
  { path: "register", component: RegisterComponent, pathMatch: "full" },
  { path: "**", component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
