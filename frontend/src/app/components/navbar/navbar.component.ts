import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Router } from "@angular/router";

@Component({
  selector: "app-navbar",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./navbar.component.html",
  styleUrl: "./navbar.component.scss"
})
export class NavbarComponent {
  currentScreen = "dashboard";

  constructor(private router: Router) {}

  navigate(screen: string): void {
    this.currentScreen = screen;
    this.router.navigate([screen]);
  }
}