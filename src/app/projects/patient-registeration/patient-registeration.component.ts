import { Component, OnInit, Output, EventEmitter, Injectable, ViewChild } from '@angular/core';
import { ToolbarComponent } from 'src/app/view/toolbar/toolbar.component';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router'; 
import { SearchpatientComponent } from 'src/app/common/searchpatient/searchpatient.component';
import { PatientRegistration } from 'src/app/model/PatientRegistration';
import { patientservice } from 'src/app/service/HISPatient/patient.service';
import { formMode } from 'src/app/model/formMode';
import { empty } from 'rxjs';
import { CommonService } from 'src/app/service/common.service';
import { Nationality } from 'src/app/model/Nationality';
import { variable } from '@angular/compiler/src/output/output_ast';
import { PatientCompanyComponent } from '../patient-company/patient-company.component';



@Component({
  selector: 'app-patient-registeration',
  templateUrl: './patient-registeration.component.html',
  styleUrls: ['./patient-registeration.component.css']
})



export class PatientRegisterationComponent  implements OnInit {

  PatientRegistrationGroup: FormGroup;
  PatientRegistration  = new PatientRegistration();
  AllPatientList: PatientRegistration[]=[];
  AllRecord = [];
  CompanyRecordID: number;

  IsNew: boolean=false;
  IsSave: boolean=false;
  IsEdit: boolean=false;
  IsDiscard: boolean=false;
  
  submitted = false;
 AllNationalities: Nationality[]=[];
 @ViewChild(PatientCompanyComponent) ChildComp; 

  constructor(private _router:Router, private fb: FormBuilder, private _PatientService: patientservice
    , private _CommonService:  CommonService) { }

  ngOnInit() {
              
                this.IsNew = true;
                this.PatientRegistrationGroup = this.fb.group({
                  FirstName:['',[Validators.required]],
                  MiddleName:[''],
                  LastName:['',Validators.required],
                  Nationality:['',Validators.required],
                  City:['',Validators.required],
                  Gender:['',Validators.required],
                  Address:[''],
                  Email:[''],
                  NationalID:[''],
                  PassportNum:[''],
                  PhoneNum:['']
       
                });

                this.GetAllPatients();
                this.GetAllNationalities()
  }

  get f() { return this.PatientRegistrationGroup.controls; }


          // get FirstName(){ return this.PatientRegistrationGroup.get("FirstName"); }
          // get MiddleName(){ return this.PatientRegistrationGroup.get("MiddleName"); }
          // get LastName(){ return this.PatientRegistrationGroup.get("LastName"); }


   OnSaveRecord() {
   
    this.submitted = true;

    debugger;
    
   this.PatientRegistration.CompanyID = this.ChildComp.SelectedCompany;
   this.PatientRegistration.CompanyClassID = this.ChildComp.SelectedCompanyClass;

   if(this.PatientRegistrationGroup.invalid)
        return;

    this.PatientRegistration.PatientType=1;
    this.PatientRegistration.CreatedOn= new Date();
    this.PatientRegistration.CreatedBy=1;
    this.PatientRegistration.Status = 1;

     this._PatientService.RegisterPatient(this.PatientRegistration).subscribe(res=>{

      alert("Record Submitted Successfully");
   
       });

  }


    GetAllPatients(){
     
        this._PatientService.GetAllPatients().subscribe(data =>{

          this.AllRecord = data;
          this.AllPatientList =   this.AllRecord[0];
         // this.CompanyRecord = this.AllRecord[1];     
        });
    }

     OnEditRecord() {
      debugger;
   
      alert("Record Edited Successfully");
    }

    OnDiscard() {
  
      this.ResetFields();


    }

    OnCancelRecord() {
      debugger;
   
      alert("Record Edited Successfully");
    }

    GetPatientByID(event: PatientRegistration){
      
     this._PatientService.GetPatientByID(event).subscribe(data =>{
           
      
      debugger;
           this.PatientRegistration = data;
           this.CompanyRecordID = this.PatientRegistration.CompanyID;
    });

    }

    OnSearch(){
        
      

            }
    OnClickHome(){
      this._router.navigate(['./menu']);
}

OnNew(){

  this.ResetFields();
  this.submitted = false;
}

ResetFields(){
  this.PatientRegistration.PatientID=null;
  this.PatientRegistration.PatientName=null;
  this.PatientRegistration.FirstName=null;
  this.PatientRegistration.MiddleName=null;
  this.PatientRegistration.LastName=null;
  this.PatientRegistration.NationalID=null;
  this.PatientRegistration.Nationality=null;
  this.PatientRegistration.PassportNum=null;
  this.PatientRegistration.PatientType=null;
  this.PatientRegistration.Address=null;
  this.PatientRegistration.City=null;
  this.PatientRegistration.Email=null;
  this.PatientRegistration.Gender=null;
  this.PatientRegistration.ContactNum=null;
  this.IsSave = true;
}

GetAllNationalities(){
                     this._CommonService.GetAllNationalities().subscribe(data => {
                   
                            this.AllNationalities = data;
                     });
}



}
