import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { LocalStorageService, SessionStorageService, LocalStorage, SessionStorage, AngularWebStorageModule } from 'angular-web-storage';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

LoginForm:  FormGroup;

  constructor(private fb: FormBuilder, private _router: Router, private _service: AuthService, private local: LocalStorageService) { }

  ngOnInit() {

                   this.LoginForm = this.fb.group({
                    UserName:['',[Validators.required]],
                    Password: ['',[Validators.required]]
                   });

  }

  Onlogin(){

   this._service.login(this.LoginForm.value).subscribe(res =>{
      debugger;
      this._service.IsUserAuthenticated = true;
    this.local.set("user",res);
    this._router.navigate(['./menu']);

   })

  }

  OnRegister(){
    this._router.navigate(['./register']);
  }
 get UserName(){
   return this.LoginForm.get('UserName');
 }
 get Password(){
   return this.LoginForm.get('Password');
 }
  

}
