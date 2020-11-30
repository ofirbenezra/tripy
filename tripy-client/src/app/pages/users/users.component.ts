import {Component, OnDestroy, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {getUsersSelector, UsersState} from '../../ngrx/state/users.state';
import {FetchUsers} from '../../ngrx/action/users.actions';
import {Observable, Subscription} from 'rxjs';
import {User} from '../../models/user.model';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import {BsModalRef, BsModalService} from "ngx-bootstrap/modal";
import {AddUserDialogComponent} from "../add-user-dialog/add-user-dialog.component";

@Component({
  selector: 'ti-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit, OnDestroy {
  usersList$: Observable<User[]>;
  users: User[];
  subscriptions: Subscription[] = [];
  faPencilAlt = faPencilAlt;
  modalRef: BsModalRef;

  constructor(private modalService: BsModalService, private usersStore: Store<UsersState>) { }

  ngOnInit() {
    this.usersList$ = this.usersStore.select(getUsersSelector);
    this.subscriptions.push(this.usersList$.subscribe(res => {
      this.users = res;
    }));
    this.usersStore.dispatch(FetchUsers());
  }

  addUser() {
    this.modalRef = this.modalService.show(AddUserDialogComponent);
  }

  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

}
