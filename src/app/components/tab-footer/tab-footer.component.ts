import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-tab-footer',
  templateUrl: './tab-footer.component.html',
  styleUrls: ['./tab-footer.component.scss'],
})
export class TabFooterComponent implements OnInit {
  currentRoute: string = '';

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = this.router.url.split('/')[1];
      }
    });
  }

  navigateTo(path: string) {
    this.router.navigate([path]);
  }
}
