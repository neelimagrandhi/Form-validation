import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Formcomponent } from 'src/form/form.component';
import{ RouterModule } from "@angular/router";
import { Homecomponent } from 'src/home/home.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
 const Routes=[{
   path: "",
   pathMatch: "full",
   redirectTo: "form"
 },{
   path: "home",
   component: Homecomponent
 },{
  path: "form",
  component: Formcomponent
}]
@NgModule({
  declarations: [
    AppComponent,
    Formcomponent,
    Homecomponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    RouterModule.forRoot(Routes,{
      useHash: true
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
