
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LocalStorageService, SessionStorageService, LocalStorage, SessionStorage, AngularWebStorageModule } from 'angular-web-storage';

@Injectable ({

    providedIn:'root'
   
   })

   
export class AuthService{
    IsUserAuthenticated : boolean = false;
    BaseUrl: string = "http://localhost:54066/api/Auth";

 constructor(private http: HttpClient, private local: LocalStorageService){
          
      if(this.local.get("user")){
                    this.IsUserAuthenticated = true;
      }else{
        this.IsUserAuthenticated = false;
      }
 }

 login(formData:FormData){
   debugger;
      return this.http.post(this.BaseUrl +"/UserLogin",formData);
 }

  register(formData: FormData){
      return this.http.post(this.BaseUrl +"/Register",formData );
  }

 


}