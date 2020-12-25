import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { NavBarComponent } from 'src/app/dashboard/shared/nav-bar/nav-bar.component';

import { FooterComponent } from 'src/app/dashboard/shared/footer/footer.component';
import { RouterModule } from '@angular/router';

import { SideBarComponent } from 'src/app/dashboard/shared/side-bar/side-bar.component';



@NgModule({
  declarations: [
    NavBarComponent,
  
    SideBarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
  ],
  exports:[
    NavBarComponent,
    SideBarComponent,
    FooterComponent,
  
  ]
})
export class SharedModule { }
