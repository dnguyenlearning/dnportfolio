import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-some',
  templateUrl: './some.component.html',
  styleUrls: ['./some.component.css']
})
export class SomeComponent implements OnInit {
  cards:any[]=[];
  constructor() { }

  ngOnInit() {
    this.cards=[
      {
        tittle: "meterializecssWithAngular",
        desc:" Using MeterializeCss to render some Content, Test Javascript with angular.",
        link:'https://github.com/DnguyenTesting/meterializecssWithAngular'
      },
      {
        tittle: "ConfirmationEmailRegister",
        desc:"Using nodeMailer to test sending Email, Use token to activate User after confirmation.",
        link:'https://github.com/DnguyenTesting/ConfirmationEmailRegister'
      },
      {
        tittle: "froala",
        desc:"When creating post, I used this editor to shorten the time",
        link:'https://github.com/Dnlearning/froala'
      },
      {
        tittle: "https://github.com/Dnlearning/ckeditor",
        desc:"Another Text Editor helper",
        link:'https://github.com/Dnlearning/ckeditor'
      },{
        tittle: "ng4Pagination",
        desc:"Working with pages, It's easy when use this plugin",
        link:'https://github.com/Dnlearning/ng4Pagination'
      },{
        tittle: "ExpressjsBackend",
        desc:" Using expressjs, mongodb, passport to create API end point for testing",
        link:'https://github.com/Dnlearning/ExpressjsBackend'
      }
    ]
  }

}
