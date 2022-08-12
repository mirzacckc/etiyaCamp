import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import {MenubarModule} from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { FooterComponent } from './components/footer/footer.component';
import { DashboardLayoutComponent } from './layouts/dashboard-layout/dashboard-layout.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { ListSkeletonComponent } from './components/list-skeleton/list-skeleton.component';
import {SkeletonModule} from 'primeng/skeleton';



@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    DashboardLayoutComponent,
    MainLayoutComponent,
    ListSkeletonComponent
  ],
  imports: [
    CommonModule,
    MenubarModule,
    InputTextModule,
    ButtonModule,
    SkeletonModule

  ],
  exports:[
    NavbarComponent,
    FooterComponent,
    DashboardLayoutComponent,
    MainLayoutComponent,
    ListSkeletonComponent
  ]
})
export class SharedModule { }
