import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  ngOnInit(){
    $('.overlaymain').width($("body").width()-70-$('.skills').width());
    $('.contentmain').width($("body").width()-70-$('.skills').width());
  }
}
