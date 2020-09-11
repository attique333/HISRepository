import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './account/login/login.component';
import { NgModule } from '@angular/core';
import { MenuComponent } from './projects/menu/menu.component';
import { ExceptionComponent } from './account/exception/exception.component';
import { RegisterComponent } from './account/register/register.component';
import { PatientRegisterationComponent } from './projects/patient-registeration/patient-registeration.component';


const routes : Routes = [
                            {  path:'', component: LoginComponent },
                            {  path:'login', component: LoginComponent },
                            {  path:'register', component: RegisterComponent },
                            { path:'menu',component: MenuComponent  },
                            { path:'exception',component: ExceptionComponent  },
                            { path:'menu',component: MenuComponent},
                            { path:'patientregisteration',component: PatientRegisterationComponent}



];

@NgModule({
   imports: [RouterModule.forRoot(routes)],
   exports: [RouterModule]

})



  export class AppRoutingModule { }