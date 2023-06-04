import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from '../shared/not-found/not-found.component';
import { SharedModule } from '../shared/shared.module';
import { CoreService } from './service/core.service';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    LoginComponent,
    NotFoundComponent,
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    SharedModule,
    MatButtonModule,
  ],
  providers: [
    CoreService
  ]
})
export class CoreModule { }
