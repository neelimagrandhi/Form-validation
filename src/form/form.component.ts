import { Component } from "@angular/core";
import { Router } from '@angular/router';
import { Homecomponent } from 'src/home/home.component';
@Component({
    selector: "app-form",
    templateUrl: "form.component.html",
    styleUrls: ["form.component.scss"]
})
export  class Formcomponent{
    
    public value:any;
    public formgroup:any;
    val:any;

    password:any;
    msg: string;
    username: any;
    constructor(private route:Router){
    
  /*submit(username,password){
      if(username.value.length<=0||password.value.length<=0){
      alert("please enter details")
  }
  else if(username.value.length>=1||password.value.length>=1){
    this.route.navigate(["home"])
}
  }
}
   /* name($event){
         var val=$event.target.value
    if(val==""){
        alert("please enter value")
        }
    else{
        return true
    }
}*/
    }
  submit(){
    if(this.username=="test"&&this.password=="test1")
    {
        localStorage.setItem("token","peers123");
        this.route.navigate(["home"])
    }
    else{
        alert("please enter values")
    }
   }
}