import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Input, Output, EventEmitter } from '@angular/core';
import { Producto } from '../productos.component';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-editar-producto',
  templateUrl: './editar-producto.component.html',
  styleUrls: ['./editar-producto.component.css']
})
export class EditarProductoComponent implements OnInit {

  @Input()
  producto:Producto;

  @Output() 
  emisor = new EventEmitter <any>();

  @Output() 
  dialog = new EventEmitter <any>();  
  
  formularioProductoEditar = new FormGroup({
    codigo: new FormControl(''),
    nombre: new FormControl(''),
    precio: new FormControl(''),
    stock: new FormControl('')
  });


  constructor() { 
  }

  cancelar(){
    this.dialog.emit(false);
  }

  ngOnInit(): void {
    this.formularioProductoEditar.setValue({
      codigo:this.producto.codigo,
      nombre:this.producto.nombre,
      precio:this.producto.precio,
      stock: this.producto.stock 
    })

  }

  guardarEdicion(){
    this.emisor.emit(this.formularioProductoEditar);
  }

}
