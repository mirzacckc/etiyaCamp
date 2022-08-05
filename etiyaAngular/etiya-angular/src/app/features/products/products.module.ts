import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { SaleDirective } from './directives/sale/sale.directive';
import { KdvPipe } from './pipes/kdv/kdv.pipe';
import { FilterProductPipe } from './pipes/filterProduct/filter-product.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClickProductCardDirective } from './directives/clickProductCard/click-product-card.directive';
import { AddProductComponent } from './pages/add-product/add-product.component';
import { ProductDashboardComponent } from './pages/product-dashboard/product-dashboard.component';
import { ProductFormComponent } from './pages/product-form/product-form.component';
import { CoreModule } from 'src/app/core/core.module';


@NgModule({
  declarations: [
    ProductListComponent,
    ProductCardComponent,    
    SaleDirective,    
    KdvPipe,    
    FilterProductPipe,    
    ClickProductCardDirective,
    AddProductComponent,
    ProductDashboardComponent,
    ProductFormComponent,
    
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CoreModule
  ],
  exports: [
    ProductListComponent,
    ProductCardComponent  
  ]
})
export class ProductsModule { }
