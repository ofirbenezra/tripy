import {createFeatureSelector, createSelector} from '@ngrx/store';
import {User} from '../../models/user.model';
import {createEntityAdapter, EntityAdapter, EntityState} from "@ngrx/entity";

export interface UsersState extends EntityState<User> {
  selectedUserId: number | null;
  loading: boolean;
  loaded: boolean;
  error: Error;
  total: number;
}

export const userAdapter: EntityAdapter<User> = createEntityAdapter<User>();

export const defaultUser: UsersState = {
  ids: [],
  entities: {},
  total: 0,
  selectedUserId: null,
  loading: false,
  loaded: false,
  error: null
};

export const initialUsersState: UsersState = userAdapter.getInitialState(defaultUser);

export const usersFeatureSelector = createFeatureSelector<UsersState>('users');
// export const getUsersSelector = createSelector(usersFeatureSelector, state => state.users);
export const getUsersSelector = createSelector(
  usersFeatureSelector,
  userAdapter.getSelectors().selectAll
);

export const totalFeatureSelector = createFeatureSelector<UsersState>('total');
export const getTotalSelector = createSelector(
  totalFeatureSelector,
  userAdapter.getSelectors().selectTotal
);
