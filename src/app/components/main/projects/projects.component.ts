import { element } from 'protractor';
import { Component, OnInit, OnDestroy ,AfterViewInit, ViewChild, ElementRef } from '@angular/core';
declare var $ :any;
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit,OnDestroy,AfterViewInit {
  @ViewChild('myIdentifier') myIdentifier: ElementRef;
  constructor() { }

  ngOnInit() {

    
  }

  ngAfterViewInit(){
    
  }
  
  ngOnDestroy(){
  }

  test(){
    console.log('ok');
  }
}
