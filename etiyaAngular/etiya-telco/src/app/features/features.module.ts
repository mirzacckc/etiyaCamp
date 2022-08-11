import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { ServicesModule } from './services/services.module';
import { HomepageComponent } from './common/pages/homepage/homepage.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    HomepageComponent
  ],
  imports: [
    CommonModule,
    FeaturesRoutingModule,
    ServicesModule,
    SharedModule
  ]
})
export class FeaturesModule { }
