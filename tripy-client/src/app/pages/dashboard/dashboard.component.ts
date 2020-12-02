import {Component, OnDestroy, OnInit} from '@angular/core';
import {UsersState} from '../../ngrx/state/users.state';
import {Store} from '@ngrx/store';

@Component({
  selector: 'ti-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {


  constructor() { }

  ngOnInit() {

  }
}
