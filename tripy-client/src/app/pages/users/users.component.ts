import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {UsersState} from '../../ngrx/state/users.state';
import {FetchUsers} from '../../ngrx/action/users.actions';

@Component({
  selector: 'ti-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  constructor(private usersStore: Store<UsersState>) { }

  ngOnInit() {
    this.usersStore.dispatch(FetchUsers());
  }

}
