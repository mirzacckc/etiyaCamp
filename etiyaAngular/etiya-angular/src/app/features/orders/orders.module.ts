import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { OrderListComponent } from './components/order-list/order-list.component';
import { WelcomeDirective } from './directives/welcome/welcome.directive';
import { MultipleDirective } from './directives/multiple/multiple.directive';


@NgModule({
  declarations: [
    OrderListComponent,    
    WelcomeDirective,
    MultipleDirective,],
  imports: [
    CommonModule,
    OrdersRoutingModule
  ]
})
export class OrdersModule { }
