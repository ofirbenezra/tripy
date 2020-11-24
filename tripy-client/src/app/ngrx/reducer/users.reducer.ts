import {createReducer, on} from '@ngrx/store';
import {initialUsersState} from '../state/users.state';
import {FetchUsers} from '../action/users.actions';

export const UsersReducer = createReducer(
  initialUsersState,
  on(FetchUsers, state => ({...state, loading: true, loaded: false})),
);
