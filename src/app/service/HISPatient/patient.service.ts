
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LocalStorageService, SessionStorageService, LocalStorage, SessionStorage, AngularWebStorageModule } from 'angular-web-storage';
import { PatientRegistration } from 'src/app/model/PatientRegistration';
import { TestPatient } from 'src/app/model/TestPatient';

@Injectable ({
    providedIn:'root'
   })


export class patientservice{

    baseURL: String= "http://localhost:54066/api/Patient";
    constructor(private http: HttpClient, private local: LocalStorageService){
       
   }
    RegisterPatient(formdata: PatientRegistration){
  
        
          return  this.http.post(this.baseURL +'/RegisterPatient', formdata);
    }

    GetAllPatients(){
       
        return this.http.get<PatientRegistration[]>(this.baseURL +'/GetAllPatientRegistrationRecord');
    }
    GetPatientByID(Patient: PatientRegistration){
        return this.http.get<PatientRegistration>(this.baseURL +'/GetPatientByID?PatientID='+ Patient.PatientID);
    }
}