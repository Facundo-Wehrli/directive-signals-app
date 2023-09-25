import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignalsRoutingModule } from './signals-routing.module';
import { SignalsLayoutComponent } from './layouts/signals-layout/signals-layout.component';
import { CounterPageComponent } from './pages/counter-page/counter-page.component';
import { UserIngoPageComponent } from './pages/user-ingo-page/user-ingo-page.component';
import { PropertiesPageComponent } from './pages/properties-page/properties-page.component';


@NgModule({
  declarations: [
    SignalsLayoutComponent,
    CounterPageComponent,
    UserIngoPageComponent,
    PropertiesPageComponent
  ],
  imports: [
    CommonModule,
    SignalsRoutingModule
  ]
})
export class SignalsModule { }
