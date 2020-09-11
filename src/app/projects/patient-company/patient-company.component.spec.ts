import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientCompanyComponent } from './patient-company.component';

describe('PatientCompanyComponent', () => {
  let component: PatientCompanyComponent;
  let fixture: ComponentFixture<PatientCompanyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientCompanyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
