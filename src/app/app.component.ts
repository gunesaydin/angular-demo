import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-demo';

  /* Removing popup element when close button or anywhere 
  else other than popup window is clicked */

  closePopup() {
    let pop = document.getElementById('app-popup');
    pop.parentElement.removeChild(pop);
  }
}
