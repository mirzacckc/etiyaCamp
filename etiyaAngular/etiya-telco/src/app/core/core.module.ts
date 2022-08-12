import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { CreateFakeArrayPipe } from './pipes/create-fake-array/create-fake-array.pipe';
import { PaginationPipe } from './pipes/pagination/pagination.pipe';
import { OverlayLoadingComponent } from './components/overlay-loading/overlay-loading.component';


@NgModule({
  declarations: [
    CreateFakeArrayPipe,
    PaginationPipe,
    OverlayLoadingComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule
  ],
  exports:[
    CreateFakeArrayPipe,
    PaginationPipe,
    OverlayLoadingComponent
  ]
})
export class CoreModule { }
