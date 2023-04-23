import { Component, Input, OnInit } from '@angular/core';
import { Producto } from '../../modelo/producto';
import { ProductoService } from 'src/app/servicios/producto.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  @Input() producto: Producto= new Producto();

  pantallaEditar: boolean = false;
  pantallaCerrarEditar: boolean = true;

  constructor(private productoService:ProductoService){}
  ngOnInit(): void {
      
  }

  actualizar(): void{
    if (this.producto.nombre != null && this.producto.precio != null &&  this.producto.stock != null && this.producto.estado != null){
      if (this.producto.nombre.trim().length != 0 && String(this.producto.precio).trim().length != 0 && String(this.producto.stock).trim().length != 0 && this.producto.estado.trim().length != 0) {
    this.productoService.actualizarProducto(this.producto).subscribe(resp=>{
      this.producto = {
        nombre: "",
        precio: 0,
        stock: 0,
        estado: "Activo"
      };
      console.log(resp);
      this.pantallaEditar= true
    });
  }
}
}
cancelar(){
  this.pantallaEditar = true;
  this.producto = {
    nombre: "",
    precio: 0,
    stock: 0,
    estado: "Activo"
  };
  this.pantallaCerrarEditar= true
}

}
