import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServiceDashboardComponent } from './components/service-dashboard/service-dashboard.component';
import { ServiceFormComponent } from './components/service-form/service-form.component';

const routes: Routes = [
  
  {path:'services',component:ServiceDashboardComponent},
  {path:'service/add',component:ServiceFormComponent},
  {path:'service/:id',component:ServiceFormComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicesRoutingModule { }
