import { Component, Inject } from '@angular/core';
import { API_URL_TOKEN, MyService } from './providers';
import { environment } from 'src/environments/environment';
import { UserService } from './user.service';
import { IUser } from './interfaces/user';
const API_URL = environment.apiURL;

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
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  welcomeMessage = 'Hello world!';
  nameInputValue = 'Test Test';
  isVisible = false;
  // users = users;
    users: IUser[] | null = null;

  data = {
    name: 'TEST in APP Component'
  };

  nameInputButtonHandler(data: { inputEl: HTMLInputElement }): void {
    console.log(data.inputEl.value);
  }

  constructor(userService: UserService) {
    userService.loadUsers().subscribe(u => this.users = u)
  }
  // constructor(myService: MyService, userService: UserService, @Inject(API_URL_TOKEN) public apiURL: string) {
  //   console.log(userService);
  //   setTimeout(() => {
  //     // this.data.name = 'CHANGED VARIABLE from app.component';
  //     this.data = { name: 'The Variable from the App.Component' };
  //     console.log('change!');
  //   }, 2000);
  // }


  toggleHandler(): void {
    this.isVisible = !this.isVisible;
  }
}
