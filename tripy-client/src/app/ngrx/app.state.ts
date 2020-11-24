import {ActionReducerMap} from '@ngrx/store';
import {UsersReducer} from './reducer/users.reducer';
import {UsersState} from './state/users.state';

export class AppState {
  users: UsersState;
}

export const appStateReducer: ActionReducerMap<AppState> = {
  users: UsersReducer
};
