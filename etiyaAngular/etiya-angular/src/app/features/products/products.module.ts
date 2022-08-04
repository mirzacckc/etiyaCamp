import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { SaleDirective } from './directives/sale/sale.directive';
import { KdvPipe } from './pipes/kdv/kdv.pipe';
import { FilterProductPipe } from './pipes/filterProduct/filter-product.pipe';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProductListComponent,
    ProductCardComponent,    
    SaleDirective,    
    KdvPipe,    
    FilterProductPipe,
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    FormsModule,
  ],
  exports: [
    ProductListComponent,
  ]
})
export class ProductsModule { }
