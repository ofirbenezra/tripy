import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {
  DayService,
  EventSettingsModel,
  GroupModel, MonthService,
  ScheduleComponent,
  TimelineMonthService,
  TimelineViewsService,
  TimeScaleModel, WeekService, WorkWeekService
} from '@syncfusion/ej2-angular-schedule';
import {User} from '../../models/user.model';

@Component({
  selector: 'ti-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss'],
  providers: [TimelineViewsService, TimelineMonthService, DayService, WeekService, WorkWeekService, MonthService]
})
export class TimelineComponent implements OnInit {
  @ViewChild("scheduleObj")
  public scheduleObj: ScheduleComponent;
  @Input() users: User[];

  public eventSettings: EventSettingsModel = {
    dataSource: [{
      Id: 1,
      Subject: 'Workflow Analysis',
      StartTime: new Date(2020, 12, 1, 9, 30),
      EndTime: new Date(2020, 12, 1, 12, 0),
      IsAllDay: true,
      OwnerId: 1,
      RoomId: 1
    }, {
      Id: 2,
      Subject: 'Requirement planning',
      StartTime: new Date(2020, 12, 1, 12, 30),
      EndTime: new Date(2020, 12, 1, 14, 45),
      IsAllDay: true,
      OwnerId: 1,
      RoomId: 1
    }, {
      Id: 3,
      Subject: 'Quality Analysis',
      StartTime: new Date(2020, 12, 2, 10, 0),
      EndTime: new Date(2020, 12, 2, 12, 30),
      IsAllDay: true,
      OwnerId: 1,
      RoomId: 1
    }]
  };
  // views: [{ option: 'TimelineWeek', timeScale: {enable: false} }];
  public selectedDate: Date = new Date(2020, 12, 1);
  public timeScaleOptions: TimeScaleModel = {enable: false};
  public allowMultipleRoom = false;
  public allowMultipleOwner = true;
  public views: Array<string> = ['TimelineWeek', 'TimelineMonth'];
  public group: GroupModel = {resources: ['Members']};
  public ownerDataSource;

  constructor() {
  }

  ngOnInit() {
    // let data = [{
    //   Id: 3,
    //   Subject: 'Conference',
    //   StartTime: new Date(2020, 1, 2, 9, 0),
    //   EndTime: new Date(2020, 1, 2, 10, 0),
    //   IsAllDay: true
    // }];
    // this.scheduleObj.addEvent(data);

    this.ownerDataSource = this.users.map((user, index) => {
      return {
        text: `${user.firstName} ${user.lastName}`,
        id: index + 1,
        groupId: index + 1,
        color: '#ffaa00'
      };
    });
  }
}
