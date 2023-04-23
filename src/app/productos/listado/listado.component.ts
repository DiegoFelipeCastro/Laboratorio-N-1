import { Component, Input } from '@angular/core';
import { Producto } from 'src/app/modelo/producto';
import { ProductoService } from 'src/app/servicios/producto.service';
@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

  public producto: Producto= new Producto();
  public productoId: any;

  @Input() productos: Producto[]=[];

   pantallaCerrar:Boolean = true;
 
  constructor(public servicioProducto:ProductoService){
  }
  ngOnInit(): void {
    this.servicioProducto.getProductos().subscribe(
      resp=>{
        console.log(resp);
        this.productos = resp;
      }
    );
  }
   editar(productoSeleccionadoEditar:Producto){
    this.producto=productoSeleccionadoEditar;
    this.pantallaCerrar = false
  }
  eliminar(productoSeleccionadoEliminar:any){
    this.productoId=productoSeleccionadoEliminar;
    this.pantallaCerrar = false
  }

}
