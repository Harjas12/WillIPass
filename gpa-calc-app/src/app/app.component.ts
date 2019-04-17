import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "GPA Calculator Application";

  constructor(private route: Router) {}

  logout() {
    if (localStorage.getItem("token") == null) {
      alert("Error: You are not signed in");
    } else {
      localStorage.removeItem("token");
      this.route.navigate([""]);
    }
  }
}
