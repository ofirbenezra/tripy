import { Component, OnInit } from '@angular/core';
import {
  EventSettingsModel,
  TimelineViewsService,
  TimeScaleModel,
  GroupModel,
  TimelineMonthService
} from '@syncfusion/ej2-angular-schedule';

@Component({
  selector: 'ti-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss'],
  providers: [TimelineViewsService, TimelineMonthService]
})
export class TimelineComponent implements OnInit {
  public eventSettings: EventSettingsModel = {
    dataSource: [{
        Id: 1,
        Subject: 'Workflow Analysis',
        StartTime: new Date(2020, 12, 1, 9, 30),
        EndTime: new Date(2020, 12, 1, 12, 0),
        IsAllDay: true,
        ProjectId: 1,
        TaskId: 2
      }, {
        Id: 2,
        Subject: 'Requirement planning',
        StartTime: new Date(2020, 12, 1, 12, 30),
        EndTime: new Date(2020, 12, 1, 14, 45),
        IsAllDay: true,
        ProjectId: 1,
        TaskId: 1
      }, {
        Id: 3,
        Subject: 'Quality Analysis',
        StartTime: new Date(2020, 12, 2, 10, 0),
        EndTime: new Date(2020, 12, 2, 12, 30),
        IsAllDay: true,
        ProjectId: 1,
        TaskId: 1
      }]
  };
  // views: [{ option: 'TimelineWeek', timeScale: {enable: false} }];
  public selectedDate: Date = new Date(2020, 12, 1);
  public timeScaleOptions: TimeScaleModel = { enable: false };
  public allowMultipleRoom = false;
  public allowMultipleOwner = true;
  public views: Array<string> = ['TimelineWeek'];
  public group: GroupModel = { resources: ['Rooms', 'Owners'] };
  // public roomDataSource = [
  //   { text: 'ROOM 1', id: 1, color: '#cb6bb2' },
  //   { text: 'ROOM 2', id: 2, color: '#56ca85' }
  // ];
  public ownerDataSource = [
    { text: 'Nancy', id: 1, groupId: 1, color: '#ffaa00' },
    { text: 'Steven', id: 2, groupId: 2, color: '#f8a398' },
    { text: 'Michael', id: 3, groupId: 3, color: '#7499e1' }
  ];
  constructor() { }

  ngOnInit() {
  }

}
