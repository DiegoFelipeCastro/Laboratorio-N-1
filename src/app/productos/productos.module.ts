import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { RegistroComponent } from './registro/registro.component';



@NgModule({
  declarations: [
    RegistroComponent
  ],
  exports: [
    RegistroComponent  
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class ProductosModule { }
