import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'small-menu',
  templateUrl: './small-menu.component.html',
  styleUrls: ['./small-menu.component.css']
})
export class SmallMenuComponent implements OnInit {
  show:boolean=false;
  constructor() { }

  ngOnInit() {
  }
  toggleShowState(e){
    e.stopPropagation();
    this.show=(this.show)?false:true;   
  }
  turnOffControl(){
    if(this.show) this.show=false;
  }

}
