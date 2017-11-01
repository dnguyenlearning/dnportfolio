import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SmallMenuComponent } from './components/small-menu/small-menu.component';
import { SkillsComponent } from './components/skills/skills.component';
import { MainComponent } from './components/main/main.component';
import { RouterModule } from '@angular/router';
import { ContactFormComponent } from './components/main/contact-form/contact-form.component';
import { ProjectsComponent } from './components/main/projects/projects.component';
import { AboutComponent } from './components/main/about/about.component';
import { ExcelComponent } from './components/main/projects/excel/excel.component';
import { AmudisplayComponent } from './components/main/projects/amudisplay/amudisplay.component';
import { SomeComponent } from './components/main/projects/some/some.component';
@NgModule({
  declarations: [
    AppComponent,
    SmallMenuComponent,
    SkillsComponent,
    MainComponent,
    ContactFormComponent,
    ProjectsComponent,
    AboutComponent,
    ExcelComponent,
    AmudisplayComponent,
    SomeComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path:'' , component: MainComponent },
      {path:'contact' , component: ContactFormComponent },
      {path:'projects' , component: ProjectsComponent },
      {path:'about' , component: AboutComponent },
      {path:'projects/excel' , component: ExcelComponent },
      {path:'projects/amudisplay' , component: AmudisplayComponent },
      {path:'projects/somes' , component: SomeComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
