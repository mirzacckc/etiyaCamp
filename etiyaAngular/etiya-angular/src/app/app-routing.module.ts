import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './pages/add-product/add-product.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { UpdateCustomerComponent } from './pages/update-customer/update-customer.component';

const routes: Routes = [
  {path:'', redirectTo:'homepage', pathMatch:'full'},
  {path:'homepage', component:HomepageComponent},
  {path: 'add-product', component:AddProductComponent},
  {path: 'dashboard/customer/add',component:UpdateCustomerComponent },
  {path: 'dashboard/customers',component:DashboardComponent },
  {path: 'dashboard/customer/:id',component:UpdateCustomerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
