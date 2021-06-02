import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { ServerDetailsComponent } from './server-details/server-details.component';
import { DashboardContainerComponent } from './dashboard-container/dashboard-container.component';
import { SharedModule } from 'src/libs/shared-ui/shared.module';
import { FiltersComponent } from './filters/filters.component';



@NgModule({
  declarations: [ServerDetailsComponent, DashboardContainerComponent, FiltersComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA]
})
export class DashboardModule { }
