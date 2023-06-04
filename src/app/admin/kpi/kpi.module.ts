import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KPIRoutingModule } from './kpi-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { KPIComponent } from './kpi.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { KpiListComponent } from './kpi-list/kpi-list.component';
import { KpiFormComponent } from './kpi-form/kpi-form.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    KPIComponent,
    KpiListComponent,
    KpiFormComponent
  ],
  imports: [
    CommonModule,
    KPIRoutingModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule,
  ]
})
export class KPIModule { }
