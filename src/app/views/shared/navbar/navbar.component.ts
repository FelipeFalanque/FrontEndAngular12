import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor() { }

  navbarShow = false;

  toggler(): void {

    let navbarElement = document.getElementById('navbarNavDropdown');

    if (navbarElement != null) {

      if (this.navbarShow) {
        navbarElement.classList.remove("navbar-collapse", "collapse", "show");
        navbarElement.classList.add("collapse", "navbar-collapse");
      }
      else {
        navbarElement.classList.remove("collapse", "navbar-collapse");
        navbarElement.classList.add("navbar-collapse", "collapse", "show");
      }

      this.navbarShow = !this.navbarShow;

    }
  }
}
