import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { DashboardLayoutComponent } from './layouts/dashboard-layout/dashboard-layout.component';
import {SkeletonModule} from 'primeng/skeleton';
import { CardSkeletonComponent } from './components/card-skeleton/card-skeleton.component';
import { CoreModule } from '../core/core.module';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { DashboardHomeComponent } from './pages/dashboard-home/dashboard-home.component';



@NgModule({
  declarations: [
    NavbarComponent,
    MainLayoutComponent,
    DashboardLayoutComponent,    
    CardSkeletonComponent, FooterComponent, DashboardHomeComponent
  ],
  imports: [
    CommonModule,
    SkeletonModule,
    CoreModule,
    RouterModule
    
  ],
  exports:[
    NavbarComponent,
    MainLayoutComponent,
    DashboardLayoutComponent,
    CardSkeletonComponent,
    FooterComponent]
})
export class SharedModule { }
