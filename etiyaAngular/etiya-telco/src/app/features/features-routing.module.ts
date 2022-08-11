import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './common/pages/homepage/homepage.component';

const routes: Routes = [
  {path:'',component:HomepageComponent},
  {path:'homepage',component:HomepageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule { }
