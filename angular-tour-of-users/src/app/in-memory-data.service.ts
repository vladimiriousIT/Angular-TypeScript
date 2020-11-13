import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDataService {
  createDb() {
    const users = [
      { id: 1, firstName: 'Ivan', lastName: 'Simeonov', age: 27 },
      { id: 2, firstName: 'Vladimir', lastName: 'Stratiev', age: 28 },
      { id: 3, firstName: 'Martin', lastName: 'Dobrev', age: 32 },
      { id: 4, firstName: 'Thomas', lastName: 'Tomov', age: 35 },
      { id: 5, firstName: 'Plamen', lastName: 'Plamenov', age: 39 },
      { id: 6, firstName: 'Petko', lastName: 'Petkov', age: 45 },
      { id: 7, firstName: 'Cveti', lastName: 'Cvetkova', age: 51 },
    ];
    return {users};
  }

  // Overrides the genId method to ensure that a user always has an id.
  // If the users array is empty,
  // the method below returns the initial number (11).
  // if the users array is not empty, the method below returns the highest
  // user id + 1.
  genId(users: User[]): number {
    return users.length > 0 ? Math.max(...users.map(user => user.id)) + 1 : 11;
  }
}
