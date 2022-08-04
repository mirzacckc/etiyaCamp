import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddProductComponent } from './pages/add-product/add-product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {HttpClientModule} from '@angular/common/http';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { RegisterComponent } from './pages/register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { CustomerFormComponent } from './pages/customer-form/customer-form.component';
import { CustomerDashboardComponent } from './pages/customer-dashboard/customer-dashboard.component';
import { ProductDashboardComponent } from './pages/product-dashboard/product-dashboard.component';
import { ProductFormComponent } from './pages/product-form/product-form.component';
import { ClickProductCardDirective } from './directives/clickProductCard/click-product-card.directive';
import { WelcomeDirective } from './directives/welcome/welcome.directive';
import { MultipleDirective } from './directives/multiple/multiple.directive';
import { OrderListComponent } from './components/order-list/order-list.component';
import { ProductsModule } from './features/products/products.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,   
    AddProductComponent,
    HomepageComponent,
    NavbarComponent,   
    CategoryListComponent,
    RegisterComponent,
    CustomerFormComponent,
    CustomerDashboardComponent,
    ProductDashboardComponent,
    ProductFormComponent,
    ClickProductCardDirective,
    WelcomeDirective,
    MultipleDirective,
    OrderListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    ProductsModule,
    CoreModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
