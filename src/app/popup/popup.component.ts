import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';

import { AppComponent } from '../app.component';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {

  // Declaring and setting timeout timer for Popup challenge

  timer = timer(5000);

  constructor(private app: AppComponent) { }


  ngOnInit() {

    // Calling initPop with a settimeout function right after component is mounted.

    this.timer.subscribe(() => {
      this.initPop();
    })
  }


  onClick() {
    this.app.closePopup();
  }

  // Selects and makes Popup element visible via class switching

  initPop() {
    let filter = document.getElementById('filter');
    let popup = document.getElementById('popup');
    filter.classList.remove('hide');
    popup.classList.remove('hide');
    filter.classList.add('show');
    popup.classList.add('show');
  }

}
