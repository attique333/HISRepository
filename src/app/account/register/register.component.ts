import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  RegistrationForm : FormGroup;

  constructor(private fb: FormBuilder, private _router: Router, private _service: AuthService) { }

  ngOnInit() {
    
    this.RegistrationForm = this.fb.group({
     UserFullName:['',[Validators.required]],
      UserName:['',[Validators.required]],
      Password: ['',[Validators.required]]
     });


  }

  get UserFullName(){
     return this.RegistrationForm.get('UserFullName');
  }
  get UserName(){
      return this.RegistrationForm.get('UserName');
  }
  get Password(){
     return this.RegistrationForm.get('Password');
  }

 
  OnRegistration(){
    
           this._service.register(this.RegistrationForm.value).subscribe(res=>{

              alert("Registered Successfully");
              this._router.navigate(['./login']);
           });
    
  }

  OnLogin(){
             this._router.navigate(['./login']);
  }


}
