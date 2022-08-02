import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './pages/add-product/add-product.component';
import { CustomerDashboardComponent } from './pages/customer-dashboard/customer-dashboard.component';
import { CustomerFormComponent } from './pages/customer-form/customer-form.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ProductDashboardComponent } from './pages/product-dashboard/product-dashboard.component';
import { ProductFormComponent } from './pages/product-form/product-form.component';

const routes: Routes = [
  {path:'', redirectTo:'homepage', pathMatch:'full'},
  {path:'homepage', component:HomepageComponent},
  {path: 'add-product', component:AddProductComponent},
  {path: 'dashboard/customer/add',component:CustomerFormComponent },
  {path: 'dashboard/customers',component:CustomerDashboardComponent },
  {path: 'dashboard/customer/:id',component:CustomerFormComponent },
  {path: 'dashboard/product/add',component:ProductFormComponent },
  {path: 'dashboard/products',component:ProductDashboardComponent },
  {path: 'dashboard/product/:id',component:ProductFormComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
