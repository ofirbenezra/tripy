import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {User} from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }

  public getUsers(): Observable<User[]> {
    return of([]);
  }
}
