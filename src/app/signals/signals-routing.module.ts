import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignalsLayoutComponent } from './layouts/signals-layout/signals-layout.component';
import { CounterPageComponent } from './pages/counter-page/counter-page.component';
import { UserIngoPageComponent } from './pages/user-ingo-page/user-ingo-page.component';
import { PropertiesPageComponent } from './pages/properties-page/properties-page.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: SignalsLayoutComponent,
        children:[
          {path:'counter', component: CounterPageComponent},
          {path:'user-info', component: UserIngoPageComponent},
          {path:'properties', component: PropertiesPageComponent},
          {path:'**', component: CounterPageComponent},
        ]
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignalsRoutingModule {}