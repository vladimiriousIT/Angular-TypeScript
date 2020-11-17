import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  // users = USERS;
  users: User[];
  // selectedUser: User;
  constructor(private userService: UserService,
              private messageService: MessageService) { }

  ngOnInit() {
    this.getUsers();
  }

  // onSelect(user: User): void {
  //   this.selectedUser = user;
  //   this.messageService.add(`UsersComponent: Selected user with id=${user.id}`);
  // }

  getUsers(): void {
    this.userService.getUsers().subscribe(users => this.users = users);
  }

  add(firstName: string, lastName: string, age: number): void {
    firstName = firstName.trim();
    if (!firstName) { return; }
    this.userService.addUser({ firstName, lastName, age } as User)
      .subscribe(user => {
        this.users.push(user);
      });
  }

  delete(user: User): void {
    this.users = this.users.filter(u => u !== user);
    this.userService.deleteUser(user).subscribe();
  }
}
