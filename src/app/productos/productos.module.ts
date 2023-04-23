import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { RegistroComponent } from './registro/registro.component';
import { ListadoComponent } from './listado/listado.component';
import { HttpClientModule } from '@angular/common/http';
import { EditarComponent } from './editar/editar.component';
import { EliminarComponent } from './eliminar/eliminar.component';



@NgModule({
  declarations: [
    RegistroComponent,
    ListadoComponent,
    EditarComponent,
    EliminarComponent,
  ],
  exports: [
    RegistroComponent,
    ListadoComponent,
    EditarComponent,
    EliminarComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ]
})
export class ProductosModule { }
