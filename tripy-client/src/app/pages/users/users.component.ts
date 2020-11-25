import {Component, OnDestroy, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {getUsersSelector, UsersState} from '../../ngrx/state/users.state';
import {FetchUsers} from '../../ngrx/action/users.actions';
import {Observable, Subscription} from 'rxjs';
import {User} from '../../models/user.model';

@Component({
  selector: 'ti-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit, OnDestroy {
  usersList$: Observable<User[]>;
  users: User[];
  subscriptions: Subscription[] = [];

  constructor(private usersStore: Store<UsersState>) { }

  ngOnInit() {
    this.usersList$ = this.usersStore.select(getUsersSelector);
    this.subscriptions.push(this.usersList$.subscribe(res => {
      this.users = res;
    }));
    this.usersStore.dispatch(FetchUsers());
  }

  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

}
