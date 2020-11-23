import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UsersListComponent } from './users-list/users-list.component';


const userRoutes: Routes = [
  { path: 'users',  component: UsersListComponent, data: { animation: 'users' } },
  { path: 'user/:id', component: UserDetailComponent, data: { animation: 'user' } }
];

@NgModule({
  imports: [RouterModule.forChild(userRoutes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
