import { Component, Input, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/servicios/producto.service';

@Component({
  selector: 'app-eliminar',
  templateUrl: './eliminar.component.html',
  styleUrls: ['./eliminar.component.css']
})
export class EliminarComponent implements OnInit {

  @Input() productoId: any;
  
  pantallaEliminar: boolean = false;
  constructor(private productoService:ProductoService){}
  ngOnInit(): void {
  }

  eliminar(): void{
    if(this.productoId != null){
    this.productoService.eliminarProducto(this.productoId).subscribe(resp=>{
      console.log(resp);
      this.pantallaEliminar = true;
    });
  }
  this.productoId = null;
  
  }

  cerrarPantallaEliminar(){
    this.productoId = null;
    this.pantallaEliminar = true;
  }
  
  
}
