import {createAction, props} from '@ngrx/store';
import {User} from '../../models/user.model';

export const FetchUsers  = createAction(
  '[Users] FETCH_USERS'
);
export const FetchUsersSuccess  = createAction(
  '[Users] FETCH_USERS_SUCCESS',
  props<{ total: number, users: Array<User> }>()
);
export const FetchUsersFailure  = createAction(
  '[Users] FETCH_USERS_FAILURE'
);
