import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  @Input() public pointToShower;

  @Output() outputToParent = new EventEmitter<boolean>();
  
   d = new Date();
   n = this.d.toLocaleDateString();

  noteToParent(state:boolean) {
debugger;
    this.outputToParent.emit(state);
  }
  constructor() { }
  ngOnInit() {
  }

}
