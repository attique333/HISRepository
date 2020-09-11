import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-searchpatient',
  templateUrl: './searchpatient.component.html',
  styleUrls: ['./searchpatient.component.css'],

})
export class SearchpatientComponent implements OnInit {

  public onClose: boolean;

  constructor(private _BsModalRef: BsModalRef) { }

  ngOnInit() {
  }

  submit() {
    debugger;
    this.onClose = true;
    this._BsModalRef.hide();
  }
  cancel() {

  }

}
