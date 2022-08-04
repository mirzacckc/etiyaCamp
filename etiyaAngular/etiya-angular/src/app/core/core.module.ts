import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { IfNotDirective } from './directives/ifNot/if-not.directive';
import { AuthModule } from './auth/auth.module';


@NgModule({
  declarations: [    
    IfNotDirective,
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    AuthModule
  ],
  exports:[
    IfNotDirective,
  ]
})
export class CoreModule { }
