import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { calculatorComponent } from "./calculatorComponent/calculatorComponent.component";

const routes: Routes = [{ path: "", component: calculatorComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
