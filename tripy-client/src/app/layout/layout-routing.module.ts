import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {LayoutComponent} from './layout.component';
import {DashboardComponent} from '../pages/dashboard/dashboard.component';
import {TimelineComponent} from '../pages/timeline/timeline.component';

const routes: Routes = [
  {
    path: '',
    // pathMatch: 'full',
    // redirectTo: 'dashboard'
    component: LayoutComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'dashboard'
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      }
    ]
  }
  // {path: '**', redirectTo: ''},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  declarations: [
    TimelineComponent
  ],
  exports: [RouterModule, TimelineComponent]
})
export class LayoutRoutingModule {
}
