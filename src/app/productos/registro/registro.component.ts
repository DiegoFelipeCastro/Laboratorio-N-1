import { Component } from '@angular/core';
import { Producto } from 'src/app/modelo/producto';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent   {
  public productos: Producto[]=[]
  verificarNombre:boolean = false;
  verificarPrecio:boolean = false;
  verificarStock:boolean = false;
  verificarEstado:boolean = false;

  producto: Producto={
    nombre:"",
    precio:0,
    stock:0,
    estado:""
  }

  agregar() {
    if (this.producto.nombre != null && this.producto.precio != null &&  this.producto.stock != null && this.producto.nombre != null){
    if (this.producto.nombre.trim().length != 0 && String(this.producto.precio).trim().length != 0 && String(this.producto.stock).trim().length != 0 && 
    this.producto.estado.trim().length != 0) {
    this.productos.push(this.producto);
    this.producto = {
      nombre: "",
      precio: 0,
      stock: 0,
      estado: ""
    };
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
      estado: ""
    };
    this.verificarNombre = false;
    this.verificarPrecio = false;
    this.verificarStock = false;
    this.verificarEstado = false;
  }

  vaciarElementos(){
    this.productos = this.productos = []
  }
  
}









  
