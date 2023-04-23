import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'In App Component';

  isButtonActive = false;

  constructor() {
    setTimeout(() => this.isButtonActive = true, 5000);
  }
}
