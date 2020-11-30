import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
import {AddUserDialogComponent} from "../pages/add-user-dialog/add-user-dialog.component";

@NgModule({
  declarations: [
    // AddUserDialogComponent,
    DashboardComponent,
    LayoutComponent,
    TopBarComponent,
    FooterComponent,
    MapComponent,
    UsersComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    GoogleMapsModule,
    LayoutRoutingModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ],
  entryComponents: [
    // AddUserDialogComponent
  ]
})
export class LayoutModule { }
