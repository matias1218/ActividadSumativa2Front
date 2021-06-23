import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sumativa2';


  vistaSelected = true;
  
  gestion(){
    this.vistaSelected = true;
    

  }
  tienda(){
    this.vistaSelected = false;
  }
}
