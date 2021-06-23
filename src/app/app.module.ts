import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2IziToastModule } from 'ng2-izitoast'

import { AppComponent } from './app.component';
import { ProductosComponent } from './productos/productos.component';
import { FormularioProductoComponent } from './productos/formulario-producto/formulario-producto.component';
import { EditarProductoComponent } from './productos/editar-producto/editar-producto.component';
import { ListarComponent } from './productos/listar/listar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalContentComponent } from './productos/modal/modal-content.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductosComponent,
    FormularioProductoComponent,
    EditarProductoComponent,
    ListarComponent,
    ModalContentComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2IziToastModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
