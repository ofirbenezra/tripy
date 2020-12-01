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
  MonthService,
  ResizeService,
  ScheduleModule,
  WeekService,
  WorkWeekService
} from '@syncfusion/ej2-angular-schedule';
import {TimelineComponent} from "../pages/timeline/timeline.component";

@NgModule({
  declarations: [
    DashboardComponent,
    LayoutComponent,
    TopBarComponent,
    FooterComponent,
    MapComponent,
    UsersComponent,
    TimelineComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    GoogleMapsModule,
    LayoutRoutingModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    ScheduleModule
  ],
  providers: [
    AgendaService, DayService, WeekService, WorkWeekService, MonthService, DragAndDropService, ResizeService
  ],
})
export class LayoutModule {
}
