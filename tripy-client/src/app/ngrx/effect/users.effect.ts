import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Observable, of} from 'rxjs';
import {Action} from '@ngrx/store';
import {FetchUsers, FetchUsersFailure, FetchUsersSuccess} from '../action/users.actions';
import {catchError, map, mergeMap} from 'rxjs/operators';
import {UsersService} from '../../services/users.service';
import * as _ from 'lodash';

@Injectable()
export class UsersEffects {
  constructor(private actions$: Actions, private usersService: UsersService) {}

  public fetchUsers$ = createEffect((): Observable<Action> =>
    this.actions$
      .pipe(
        ofType(FetchUsers),
        mergeMap(() => {
          return this.usersService.getUsers()
            .pipe(
              map((resp) => FetchUsersSuccess({total: resp.length, users: resp})),
              catchError((err) => of(FetchUsersFailure()))
            );
        })
      ));
}
