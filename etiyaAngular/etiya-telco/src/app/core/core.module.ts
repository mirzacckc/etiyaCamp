import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { CreateFakeArrayPipe } from './pipes/create-fake-array/create-fake-array.pipe';
import { PaginationPipe } from './pipes/pagination/pagination.pipe';


@NgModule({
  declarations: [
    CreateFakeArrayPipe,
    PaginationPipe
  ],
  imports: [
    CommonModule,
    CoreRoutingModule
  ],
  exports:[
    CreateFakeArrayPipe,
    PaginationPipe
  ]
})
export class CoreModule { }
