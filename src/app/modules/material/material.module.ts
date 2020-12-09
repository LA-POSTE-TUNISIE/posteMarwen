import { NgModule } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatExpansionModule} from '@angular/material/expansion';

const materialComponents = [
  MatTableModule,
  MatSidenavModule,
  MatFormFieldModule,
  MatInputModule,
  MatMenuModule,
  MatButtonModule,
  MatListModule,
  MatExpansionModule,
];
@NgModule({
  declarations: [],
  imports: [
    materialComponents
  ],
  exports:[
    materialComponents
  
  ]
})
export class MaterialModule { }
