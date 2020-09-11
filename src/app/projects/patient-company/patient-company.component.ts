import { Component, OnInit, Input, Output,EventEmitter   } from '@angular/core';
import { CommonService } from 'src/app/service/common.service';
import { FormGroup } from '@angular/forms';
import { stringify } from '@angular/compiler/src/util';

@Component({
  selector: 'app-patient-company',
  templateUrl: './patient-company.component.html',
  styleUrls: ['./patient-company.component.css']
})
export class PatientCompanyComponent implements OnInit {

PatientCompany : FormGroup;
CompanyList = [];
CompanyClass = [];

SelectedCompany : number;
SelectedCompanyClass : number;

  constructor(private _CommonService:  CommonService) { 

    this.GetCompanyList();
  }

  ngOnInit() {
  }

  
@Input() SelectedCompanyID: number;

  GetCompanyList(){
    this._CommonService.GetCompanyList().subscribe(data => {
  
           this.CompanyList = data;
    });
}

OnSelectCompany(event: number){

  this.CompanyClass = this.CompanyList.find(a =>a.CompanyID == event).CompanyClass;
  this.SelectedCompany = event;
}
OnSelectCompanyClass(ClassID: number){
    this.SelectedCompanyClass = ClassID;
}

}
