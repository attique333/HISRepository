import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LoginComponent } from './account/login/login.component';
import { RegisterComponent } from './account/register/register.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import { ReactiveFormsModule } from '@angular/forms';
import { MenuComponent } from './projects/menu/menu.component';
import { ExceptionComponent } from './account/exception/exception.component';
import { HeaderComponent } from './view/header/header.component';
import { FooterComponent } from './view/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { LocalStorageService, SessionStorageService, LocalStorage, SessionStorage, AngularWebStorageModule } from 'angular-web-storage';
import { PatientRegisterationComponent } from './projects/patient-registeration/patient-registeration.component';
import { MainheaderComponent } from './projects/mainheader/mainheader.component';
import { MainmenuComponent } from './projects/mainmenu/mainmenu.component';
import { ToolbarComponent } from './view/toolbar/toolbar.component';
import { SearchpatientComponent } from './common/searchpatient/searchpatient.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { PatientCompanyComponent } from './projects/patient-company/patient-company.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuComponent,
    ExceptionComponent,
    HeaderComponent,
    FooterComponent,
    RegisterComponent,
    PatientRegisterationComponent,
    MainheaderComponent,
    MainmenuComponent,
    ToolbarComponent,
    SearchpatientComponent,
    PatientCompanyComponent
    
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    AppRoutingModule,
    Ng4LoadingSpinnerModule,
    ModalModule
    
    
    
  ],
  
  providers: [
    
],

  bootstrap: [AppComponent],
  entryComponents: [SearchpatientComponent]
})
export class AppModule { }
