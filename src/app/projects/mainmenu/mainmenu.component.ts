import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mainmenu',
  templateUrl: './mainmenu.component.html',
  styleUrls: ['./mainmenu.component.css']
})
export class MainmenuComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit() {
  }

  OnPatientRegisteration(){
    
    this._router.navigate(['./patientregisteration']);
  }

}
