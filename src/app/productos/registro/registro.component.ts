import { Component, Input, OnInit } from '@angular/core';
import { Producto } from 'src/app/modelo/producto';
import { ProductoService } from 'src/app/servicios/producto.service';
import { ListadoComponent } from '../listado/listado.component';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit  {
  public productos: Producto[]=[]
  @Input() listar: ListadoComponent | undefined;
  

  verificarNombre:boolean = false;
  verificarPrecio:boolean = false;
  verificarStock:boolean = false;
  verificarEstado:boolean = false;

  producto: Producto= new Producto();



  constructor(private productoService:ProductoService){}
  ngOnInit(): void {
      
  }

  agregar(): void {
    if (this.producto.nombre != null && this.producto.precio != null &&  this.producto.stock != null && this.producto.estado != null){
    if (this.producto.nombre.trim().length != 0 && String(this.producto.precio).trim().length != 0 && String(this.producto.stock).trim().length != 0 && this.producto.estado.trim().length != 0) {
    this.productoService.crearProducto(this.producto).subscribe(resp=>{
      this.producto = {
        nombre: "",
        precio: 0,
        stock: 0,
        estado: "Activo"
      };
      console.log(resp);
      this.listar?.ngOnInit();
    });
    
   }
  }
  return;
}



  verificarRegistroNombre() {
    if (this.producto.nombre == '') {
      this.verificarNombre = true;
    }
    else{
      this.verificarNombre =false;
    }
  }
  verificarRegistroPrecio() {
    if (String(this.producto.precio) == '' || this.producto.precio == null ) {
      
      this.verificarPrecio = true;
    }
    else{
      this.verificarPrecio =false;
    }
  }
  verificarRegistroStock() {
    if (String(this.producto.stock) == '' || this.producto.stock == null) {
      this.verificarStock = true;
    }
    else{
      this.verificarStock =false;
    }
  }
  verificarRegistroEstado() {
    if (this.producto.estado == '') {
      this.verificarEstado = true;
    }
    else{
      this.verificarEstado =false;
    }
  }
  borrarDatosPantalla(){
    this.producto = {
      nombre: "",
      precio: 0,
      stock: 0,
      estado: "Activo"
    };
    this.verificarNombre = false;
    this.verificarPrecio = false;
    this.verificarStock = false;
    this.verificarEstado = false;
  }

  // vaciarElementos(){
  //   this.productos = this.productos = []
  // }
  
}









  
