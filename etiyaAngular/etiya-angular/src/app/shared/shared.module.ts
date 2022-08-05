import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { CategoriesModule } from '../features/categories/categories.module';
import { ProductsModule } from '../features/products/products.module';
import { BrowserModule } from '@angular/platform-browser';
import { SharedRoutingModule } from './shared-routing.module';



@NgModule({
  declarations: [ 
    NavbarComponent,    
    HomepageComponent,
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,    
    CategoriesModule,
    ProductsModule,
    BrowserModule,
  ],
  exports:[NavbarComponent]
})
export class SharedModule { }
