import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { Router } from '@angular/router';
import { LocalStorageService } from 'angular-web-storage';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ["./menu.component.css"  ]
  
})
export class MenuComponent implements OnInit {

  constructor(private _service: AuthService,private _router: Router, private local: LocalStorageService) { }

  ngOnInit() {

   
  }

  OnLogout(){
              
  }

  OnPatientRegisteration(){
    
    this._router.navigate(['./patientregisteration']);
  }


}
