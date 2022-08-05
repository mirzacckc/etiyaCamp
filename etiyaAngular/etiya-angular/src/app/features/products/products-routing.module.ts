import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuard } from 'src/app/core/auth/guards/login-guard/login.guard';
import { AddProductComponent } from './pages/add-product/add-product.component';
import { ProductDashboardComponent } from './pages/product-dashboard/product-dashboard.component';
import { ProductFormComponent } from './pages/product-form/product-form.component';

const routes: Routes = [
{path:"add-product",component:AddProductComponent, canActivate:[LoginGuard]},
{path: 'add-product', component:AddProductComponent},
{path: 'dashboard/product/add',component:ProductFormComponent },
{path: 'dashboard/products',component:ProductDashboardComponent },
{path: 'dashboard/product/:id',component:ProductFormComponent },];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
