import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayTitleComponent } from './components/overlay-title/overlay-title.component';
import { SideFilterComponent } from './components/side-filter/side-filter.component';
import { SettingsMenuComponent } from './components/settings-menu/settings-menu.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { TableInfoComponent } from './components/table-info/table-info.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ContainerComponent } from './components/container/container.component';
import { ConfirmComponent } from './components/confirm/confirm.component';
import { WarningMessageComponent } from './components/warning-message/warning-message.component';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { InfoTitleComponent } from './components/info-title/info-title.component';
import { AddNewItemButtonComponent } from './components/add-new-item-button/add-new-item-button.component';
import { ShowcaseComponent } from './pages/showcase/showcase.component';
import { TableAccordionComponent } from './components/table-accordion/table-accordion.component';
import { BarMenuComponent } from './components/bar-menu/bar-menu.component';



@NgModule({
  declarations: [
    OverlayTitleComponent,
    SideFilterComponent,
    SettingsMenuComponent,
    NavbarComponent,
    UserInfoComponent,
    TableInfoComponent,
    NotFoundComponent,
    ContainerComponent,
    ConfirmComponent,
    WarningMessageComponent,
    MainLayoutComponent,
    InfoTitleComponent,
    AddNewItemButtonComponent,
    ShowcaseComponent,
    TableAccordionComponent,
    BarMenuComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    OverlayTitleComponent,
    SideFilterComponent,
    SettingsMenuComponent,
    NavbarComponent,
    UserInfoComponent,
    TableInfoComponent,
    NotFoundComponent,
    ContainerComponent,
    ConfirmComponent,
    WarningMessageComponent,
    MainLayoutComponent,
    InfoTitleComponent,
    AddNewItemButtonComponent,
    TableAccordionComponent,
    BarMenuComponent

  ]
})
export class SharedModule { }
