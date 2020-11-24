import {createFeatureSelector, createSelector} from '@ngrx/store';

export interface UsersState {
  loading: boolean;
  loaded: boolean;
  error: Error;
  total: number;
  users: [];
}

export const initialUsersState: UsersState = {
  loading: false,
  loaded: false,
  error: null,
  total: 0,
  users: []
};

export const usersFeatureSelector = createFeatureSelector<UsersState>('users');
export const getUsersSelector = createSelector(usersFeatureSelector, state => state.users);
