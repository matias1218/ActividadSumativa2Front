import { Component, OnInit,Input} from '@angular/core';
import { Inject }  from '@angular/core';
import { DOCUMENT } from '@angular/common'; 
import {Ng2IzitoastService} from "ng2-izitoast";
import { FormGroup, FormControl } from '@angular/forms';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalContentComponent } from './modal/modal-content.component';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';




@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  

  @Input()
  vista:any;

  productosVitrina:Array<Producto> = [];
  setVisibleAddForm = false;
  setVisibleEditForm = false;
  auxProduct:any;

  subtotal = 0;
  subTotalIVA = 0;
  carrito:Array<Producto> = [];

  constructor(public iziToast: Ng2IzitoastService,@Inject(DOCUMENT) document) {
      // se agregan algunos productos de prueba

      let producto1 = new Producto();
      producto1.codigo = 3434;
      producto1.nombre = "Iphone 10";
      producto1.precio = 500000;
      producto1.stock = 20;
      this.productosVitrina.push(producto1);
      let producto2 = new Producto();
      producto2.codigo = 585;
      producto2.nombre = "Xiaomi 10";
      producto2.precio = 300000;
      producto2.stock = 50;
      this.productosVitrina.push(producto2);
      let producto3 = new Producto();
      producto3.codigo = 658;
      producto3.nombre = "Samsung S10";
      producto3.precio = 250000;
      producto3.stock = 40;
      this.productosVitrina.push(producto3);
  }

  ngOnInit(): void {
  }



  // actualiza el precio del subtotal
  actualizarSubTotal(){
    let acumulado = 0;
    this.carrito.forEach((producto:Producto) => {
      acumulado+=producto.precio;
    });

    this.subtotal = acumulado;
    this.subTotalIVA = Math.floor((this.subtotal/1.19)*0.19);
    
  }

  // borra un producto de la lista del carrito de compras
  quitar(prod:any){
    this.carrito.splice(this.carrito.findIndex(function(producto:Producto){
      return producto.codigo === prod.codigo;
    }), 1);
    let valor = parseInt((<HTMLInputElement>document.getElementById('valor'+prod.codigo)).value);
    if(valor>0){
      valor-=1;
      (<HTMLInputElement>document.getElementById('valor'+prod.codigo)).value = valor+"";
    }
    this.actualizarSubTotal();
  }

  // agrega un producto al carrito de compras
  agregar(producto:any){
    this.carrito.push(producto);
    let valor = parseInt((<HTMLInputElement>document.getElementById('valor'+producto.codigo)).value);
    valor+=1;
    (<HTMLInputElement>document.getElementById('valor'+producto.codigo)).value = valor+"";
    this.actualizarSubTotal();
  }
 
  nuevoProducto(){
    this.setVisibleAddForm = true;
  }

  

  // metodo que recibe el producto a agregar desde el componente formulario de productos
  receptorFormulario($event: any){
    this.productosVitrina.push($event); 
    this.setVisibleAddForm = false;
    this.iziToast.success({ 
      title: "Producto Agregado",
      position:"topCenter",
      
    });
  }
  // metodo que recibe el producto a agregar desde el componente formulario de productos
  cancelDialog($event: any){
    this.setVisibleAddForm = $event;
    this.setVisibleEditForm = $event;
  }
  // metodo que recibe el producto a editar del componente listado
  receptorEdicionProductoLista($event: any){
    this.setVisibleEditForm = true;
    this.auxProduct = $event;
  }

  // metodo que recibe el producto a editar del componente listado
  receptorEdicionProductoForm($event: FormGroup){
    this.setVisibleEditForm = false;
    console.log(this.productosVitrina);
    const index = this.productosVitrina.findIndex((prod:Producto) => prod.codigo = $event.value.codigo);
    let producto = this.productosVitrina[index];
    producto.nombre = $event.value.nombre;
    producto.precio = $event.value.precio;
    producto.stock = $event.value.stock;
  }
  // metodo que recibe el producto a editar del componente listado
  receptorBorrarProductoLista($event: number){
    this.productosVitrina.splice(this.productosVitrina.findIndex(function(producto:Producto){
      return producto.codigo === $event;
    }), 1);

  }

}

export class Producto{
  codigo:any;
  nombre:any;
  precio:any;
  stock:any;
}