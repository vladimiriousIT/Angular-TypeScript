import { Component } from '@angular/core';

const users = [
  {
    firstName: 'First Name 1',
    lastName: 'Last Name 1',
    age: 30
  },
  {
    firstName: 'First Name 2',
    lastName: 'Last Name 2',
    age: 31
  },
  {
    firstName: 'First Name 3',
    lastName: 'Last Name 3',
    age: 32
  }
]

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  welcomeMessage = 'Hello world!';
  nameInputValue = 'Test Test';
  isVisible = false;
  users = users;

  nameInputButtonHandler(data: { inputEl: HTMLInputElement}): void{
    console.log(data.inputEl.value);
  }

  constructor() {
  }

  toggleHandler(): void {
    this.isVisible = !this.isVisible;
  }
}
