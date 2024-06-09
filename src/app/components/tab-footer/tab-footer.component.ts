import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab-footer',
  templateUrl: './tab-footer.component.html',
  styleUrls: ['./tab-footer.component.scss'],
})
export class TabFooterComponent  implements OnInit {

  constructor(private router: Router) {}

  navigateTo(path: string) {
    this.router.navigate([path]);
  }

  ngOnInit() {}

}
