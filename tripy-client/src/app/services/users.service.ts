import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {User} from '../models/user.model';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private BASE_DOMAIN = environment.API_BASE_DOMAIN;

  constructor(private httpClient: HttpClient) {
  }

  public getUsers(): Observable<User[]> {
    return this.httpClient.get<any[]>(`/users`).pipe(
      map(users => {
        return users.map(user => {
          return new User(user.id, user.user_name, user.status, user.first_name, user.last_name, user.phone, user.email, user.free_from, user.free_until);
        });
      })
    );
  }
}
