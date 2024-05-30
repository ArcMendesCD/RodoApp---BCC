import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})

export class AppComponent {
  constructor() {}

  // curveTab(event: Event) {
  //   const buttons = document.querySelectorAll('ion-tab-button');
  //   buttons.forEach(button => button.classList.remove('curved'));
  //   const clickedButton = event.currentTarget as HTMLElement;
  //   clickedButton.classList.add('curved');
  // }
}

