import {createReducer, on} from '@ngrx/store';
import {initialUsersState, userAdapter} from '../state/users.state';
import {FetchUsers, FetchUsersFailure, FetchUsersSuccess} from '../action/users.actions';

export const UsersReducer = createReducer(
  initialUsersState,
  on(FetchUsers, state => ({...state, loading: true, loaded: false})),
  on(FetchUsersSuccess, (state, {total, users}) => {
    return userAdapter.setAll(users, state);
  }),
  on(FetchUsersFailure, state => ({...state, loading: false, loaded: true})),
);
