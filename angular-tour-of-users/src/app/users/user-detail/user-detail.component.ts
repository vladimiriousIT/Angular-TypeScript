import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../user';
import { Location } from '@angular/common';
import { UserService } from './../../user.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  //@Input() user: User;
  user: Observable<User>;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private location: Location) { }

  // ngOnInit(): void {
  //   this.getUser();
  // }

  ngOnInit() {
    this.user$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.userService.getUser(params.get('id'))));
  }

  getUser(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.userService.getUser(id).subscribe(user => this.user = user);
  }

  goBack(): void {
    this.location.back();
  }

  // save(): void {
  //   this.userService.updateUser(this.user)
  //     .subscribe(() => this.goBack());
  // }

  gotoUsers(user: User) {
      const userId = user ? user.id : null;
      // Pass along the user id if available
      // so that the UserList component can select that user.
      // Include a junk 'foo' property for fun.
      this.router.navigate(['/superusers', { id: userId, foo: 'foo' }]);
    }
}
