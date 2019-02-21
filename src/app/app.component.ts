import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myfirstex';
  shower:boolean = true;


getOutputVal(ev:boolean){
  debugger;
  if (!ev){
  this.shower = ev;
}
else{
  this.shower = true;
}
}

}
