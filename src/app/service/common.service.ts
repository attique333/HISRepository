import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LocalStorageService, SessionStorageService, LocalStorage, SessionStorage, AngularWebStorageModule } from 'angular-web-storage';
import { Nationality } from '../model/Nationality';

@Injectable ({

    providedIn:'root'
   
   })

export class CommonService{

    IsUserAuthenticated : boolean = false;
    BaseUrl: string = "http://localhost:54066/api/Common";

    constructor(private http: HttpClient, private local: LocalStorageService){
          
        if(this.local.get("user")){
                      this.IsUserAuthenticated = true;
        }else{
          this.IsUserAuthenticated = false;
        }
   }

   GetAllNationalities(){
       return this.http.get<Nationality[]>(this.BaseUrl + "/GetAllNationalities");
   }
   GetCompanyList(){
    return this.http.get<any[]>(this.BaseUrl + "/CompanyList");
}

}