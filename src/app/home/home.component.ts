import { Component, OnInit } from '@angular/core';
import {MenuItem} from "primeng/api";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  menuItems: MenuItem[] = [];

  constructor() { }

  ngOnInit(): void {
    this.menuItems = [
      {
        label: 'Home',
        icon: "pi pi-home",
        routerLink: "/newsfeed"
      },
      {
        label: 'Notifications',
        icon: "pi pi-bell",
        routerLink: '/'
      },
      {
        label: 'Profile',
        icon: 'pi pi-user',
        routerLink: '/'
      }
    ]
  }

}
