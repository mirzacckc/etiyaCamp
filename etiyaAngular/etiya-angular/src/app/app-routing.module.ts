import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderListComponent } from './features/orders/components/order-list/order-list.component';
import { AddProductComponent } from './features/products/pages/add-product/add-product.component';
import { CustomerDashboardComponent } from './features/customers/pages/customer-dashboard/customer-dashboard.component';
import { CustomerFormComponent } from './features/customers/pages/customer-form/customer-form.component';
import { HomepageComponent } from './shared/pages/homepage/homepage.component';
import { ProductDashboardComponent } from './features/products/pages/product-dashboard/product-dashboard.component';
import { ProductFormComponent } from './features/products/pages/product-form/product-form.component';

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
  {path: 'order-list',component:OrderListComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
