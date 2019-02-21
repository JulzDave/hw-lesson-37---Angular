import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-addjob',
  templateUrl: './addjob.component.html',
  styleUrls: ['./addjob.component.css']
})
export class AddjobComponent implements OnInit {

  @Input() public pointToShower;
  constructor() { }
  allJobs: any = [
    { name: "Copywriter", location: "Raanana", pay: "6200" },
    { name: "Bouncer", location: "Herzliya", pay: "5900" },
    { name: "Dancer", location: "Raanana", pay: "4200" },
    { name: "Nurse", location: "Nes-Ziona", pay: "6300" }
  ];

  name:string = ""
  location:string = ""
  pay:string = ""

  addJob() {
    this.allJobs.push({ name:this.name, location:this.location, pay:this.pay })
  }

  ngOnInit() {
  }

}
