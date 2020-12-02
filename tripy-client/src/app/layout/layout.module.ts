import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LayoutRoutingModule} from './layout-routing.module';
import {LayoutComponent} from './layout.component';
import {TopBarComponent} from '../pages/top-bar/top-bar.component';
import {FooterComponent} from '../pages/footer/footer.component';
import {MapComponent} from '../pages/map/map.component';
import {GoogleMapsModule} from '@angular/google-maps';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DashboardComponent} from '../pages/dashboard/dashboard.component';
import {UsersComponent} from '../pages/users/users.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {
  AgendaService,
  DayService,
  DragAndDropService,
  MonthAgendaService,
  MonthService,
  ResizeService,
  ScheduleModule,
  WeekService,
  WorkWeekService
} from '@syncfusion/ej2-angular-schedule';
import {TimePickerModule} from '@syncfusion/ej2-angular-calendars';
import {TimelineComponent} from '../pages/timeline/timeline.component';
import {PlanningTabComponent} from '../pages/dashboard/planning-tab/planning-tab.component';
import {IdeasTabComponent} from '../pages/dashboard/ideas-tab/ideas-tab.component';

@NgModule({
  declarations: [
    DashboardComponent,
    LayoutComponent,
    TopBarComponent,
    FooterComponent,
    MapComponent,
    UsersComponent,
    TimelineComponent,
    PlanningTabComponent,
    IdeasTabComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    GoogleMapsModule,
    LayoutRoutingModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    ScheduleModule,
    TimePickerModule
  ],
  providers: [
    DayService,
    WeekService,
    WorkWeekService,
    MonthService,
    AgendaService,
    MonthAgendaService,
    DragAndDropService, ResizeService
  ],
})
export class LayoutModule {
}
