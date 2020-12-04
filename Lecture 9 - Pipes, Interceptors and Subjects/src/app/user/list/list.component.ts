import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  userList$ = this.userService.userList$;

  constructor(private userService: UserService) { }

  // ngOnInit(): void {
  //   this.userService.loadUsers().subscribe(userList => {this.userList = userList; });
  //   this.userService.loadUsers();
  // }

}
