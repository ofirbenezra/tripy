import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {LayoutComponent} from './layout.component';
import {DashboardComponent} from '../pages/dashboard/dashboard.component';
import {PlanningTabComponent} from "../pages/dashboard/planning-tab/planning-tab.component";
import {IdeasTabComponent} from "../pages/dashboard/ideas-tab/ideas-tab.component";

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
        component: DashboardComponent,
        children: [
          {
            path: '',
            pathMatch: 'full',
            redirectTo: 'planning'
          },
          {
            path: 'planning',
            component: PlanningTabComponent
          },
          {
            path: 'ideas',
            component: IdeasTabComponent
          }
        ]
      }
    ]
  }
  // {path: '**', redirectTo: ''},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  declarations: [
  ],
  exports: [RouterModule]
})
export class LayoutRoutingModule {
}
