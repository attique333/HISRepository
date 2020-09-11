import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { Router } from '@angular/router';
import { LocalStorageService } from 'angular-web-storage';

@Component({
  selector: 'app-mainheader',
  templateUrl: './mainheader.component.html',
  styleUrls: ['./mainheader.component.css']
})
export class MainheaderComponent implements OnInit {

  constructor(private _service: AuthService,private _router: Router, private local: LocalStorageService) { }

  ngOnInit() {

    debugger;
    if(!this._service.IsUserAuthenticated){
       this._router.navigate(['./login']);
    }
  }

  OnLogout(){
               this._service.IsUserAuthenticated=false;
               this.local.remove('user');
               this._router.navigate(['./login']);
  }

}
