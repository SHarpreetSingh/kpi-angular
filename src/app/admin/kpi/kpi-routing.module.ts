import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KPIComponent } from './kpi.component';

const routes: Routes = [
  {
    path: '',
    component: KPIComponent,
    data : {  
      title: 'KPI'  
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KPIRoutingModule { }
