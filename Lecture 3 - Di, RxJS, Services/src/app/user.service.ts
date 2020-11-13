import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from './interfaces/user';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public http: HttpClient) {}
    loadUsers(): Observable < IUser[] > {
      return this.http.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
    }
}
