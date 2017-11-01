import { Component, OnInit } from '@angular/core';
declare  var $ : any;
@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    let randomProject=Math.floor(Math.random() * 4) + 1;
    $('.carousel').carousel();
    $('.carousel').carousel('set',randomProject);   
    
  }

}
