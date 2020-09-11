import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  message: string='bbb';
  constructor(private _router:Router) { }

  ngOnInit() {
  }


  OnClickRecord(event: string){
    debugger;
    this.message = event;

   }


  OnClickHome(){
          this._router.navigate(['./menu']);
  }

}
