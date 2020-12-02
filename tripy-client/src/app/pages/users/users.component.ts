import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {getUsersSelector, UsersState} from '../../ngrx/state/users.state';
import {FetchUsers} from '../../ngrx/action/users.actions';
import {Observable, Subscription} from 'rxjs';
import {User} from '../../models/user.model';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';
import {AddUserDialogComponent} from '../add-user-dialog/add-user-dialog.component';
import {IconDefinition} from '@fortawesome/fontawesome-common-types';

@Component({
  selector: 'ti-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  @Input() users: User[];
  faPencilAlt = faPencilAlt;
  modalRef: BsModalRef;
  statusIcon: IconDefinition;

  constructor(private modalService: BsModalService) { }

  ngOnInit() {}


  addUser() {
    this.modalRef = this.modalService.show(AddUserDialogComponent);
  }
}
