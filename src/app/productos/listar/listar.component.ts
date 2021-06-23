import { Component, Input, Output, OnInit ,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  

  @Input()
  productos:any;

  @Output() 
  emisorEdit = new EventEmitter <any>();  

  @Output() 
  emisorDelete = new EventEmitter <any>();  
  constructor() { }

  

  ngOnInit(): void {
  }

  openEdit(producto){
    console.log(producto);
    this.emisorEdit.emit(producto);
  }

  openDelete(producto){
    console.log(producto);
    this.emisorDelete.emit(producto);
  }

}
