import { Component, OnInit,Input ,Output,EventEmitter} from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl } from '@angular/forms';

import {Ng2IzitoastService} from "ng2-izitoast";

@Component({
    selector: 'app-modal-content',
    templateUrl: './modal-content.component.html'
  })
export class ModalContentComponent {
    @Input() name;

    @Output() emisor = new EventEmitter <any>();

    formularioProducto = new FormGroup({
      codigo: new FormControl(''),
      nombre: new FormControl(''),
      precio: new FormControl(''),
      stock: new FormControl('')
    })
  
    constructor(public activeModal: NgbActiveModal,public iziToast: Ng2IzitoastService) {}

    guardar(){
      let comprobacion = true;
      if(this.formularioProducto.value.codigo == ""){
        this.iziToast.warning({ 
          title: "El campo codigo no se ha ingresado",
          position:"topRight",
          transitionIn:'fadeInDown'
          
        });
        comprobacion = false;
      }
      if(this.formularioProducto.value.nombre == ""){
        this.iziToast.warning({ 
          title: "El campo nombre no se ha ingresado",
          position:"topRight",
          transitionIn:'fadeInDown'
        });
        comprobacion = false;
      }
      if(this.formularioProducto.value.precio == ""){
        this.iziToast.warning({ 
          title: "El campo precio no se ha ingresado",
          position:"topRight",
          transitionIn:'fadeInDown'
        });
        comprobacion = false;
      }
      if(this.formularioProducto.value.stock == ""){
        this.iziToast.warning({ 
          title: "El campo stock no se ha ingresado",
          position:"topRight",
          transitionIn:'fadeInDown'
        });
        comprobacion = false;
      }
  
      if(comprobacion){
        let newProducto = new Producto();
  
        newProducto.codigo = this.formularioProducto.value.codigo;
        newProducto.nombre = this.formularioProducto.value.nombre;
        newProducto.precio = this.formularioProducto.value.precio;
        newProducto.stock = this.formularioProducto.value.stock;
        
        this.emisor.emit(newProducto);
      }
    }
}

export class Producto{
  codigo:any;
  nombre:any;
  precio:any;
  stock:any;
}