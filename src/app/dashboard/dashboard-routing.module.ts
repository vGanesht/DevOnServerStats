import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardContainerComponent } from './dashboard-container/dashboard-container.component';
import { ServerDetailsComponent } from './server-details/server-details.component';


const routes: Routes = [
  {
    path: 'server',
    component: DashboardContainerComponent,
    children: [
      {
        path: 'server-details',
        component: ServerDetailsComponent,
      },
      { path: '', redirectTo: 'server-details', pathMatch: 'full' },
    ],
  },
  { path: '', redirectTo: 'server', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
