import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import {MenubarModule} from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { FooterComponent } from './components/footer/footer.component';
import { DashboardLayoutComponent } from './layouts/dashboard-layout/dashboard-layout.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';



@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    DashboardLayoutComponent,
    MainLayoutComponent
  ],
  imports: [
    CommonModule,
    MenubarModule,
    InputTextModule,
    ButtonModule

  ],
  exports:[
    NavbarComponent,
    FooterComponent,
    DashboardLayoutComponent,
    MainLayoutComponent
  ]
})
export class SharedModule { }
