import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'In App Component';

  isButtonActive = false;

  onClickStatus = 'Button Is Untouched';

  inputText = '';

  constructor() {
    setTimeout(() => this.isButtonActive = true, 5000);
  }

  onClick = () => {
    this.onClickStatus = 'Button Is Clicked'
  }

  onUserInput = (event: Event) => {
    this.inputText = (<HTMLInputElement>event.target).value;
  }
}
