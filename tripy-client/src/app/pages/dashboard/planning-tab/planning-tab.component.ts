import {Component, OnDestroy, OnInit} from '@angular/core';
import {getUsersSelector, UsersState} from '../../../ngrx/state/users.state';
import {FetchUsers} from '../../../ngrx/action/users.actions';
import {Observable, Subscription} from 'rxjs';
import {User} from '../../../models/user.model';
import {Store} from '@ngrx/store';

@Component({
  selector: 'ti-planning-tab',
  templateUrl: './planning-tab.component.html',
  styleUrls: ['./planning-tab.component.scss']
})
export class PlanningTabComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  usersList$: Observable<User[]>;
  users;
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
