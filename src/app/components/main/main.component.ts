import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare  var $ : any;
@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(
    private route:Router
  ) { }

  ngOnInit() {
    let randomProject=Math.floor(Math.random() * 4) + 1;
    $('.carousel').carousel();
    $('.carousel').carousel('set',randomProject);   
    
  }

}
