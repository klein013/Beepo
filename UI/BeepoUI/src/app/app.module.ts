import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { ShowEmpComponent } from './employee/show-emp/show-emp.component';
import { AddEditEmpComponent } from './employee/add-edit-emp/add-edit-emp.component';
import { LoginEmpComponent } from './employee/login-emp/login-emp.component';
import { PatientComponent } from './patient/patient.component';
import { ShowPatComponent } from './patient/show-pat/show-pat.component';
import { AddEditPatComponent } from './patient/add-edit-pat/add-edit-pat.component';
import { LoginPatComponent } from './patient/login-pat/login-pat.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { ShowApptComponent } from './appointment/show-appt/show-appt.component';
import { AddEditApptComponent } from './appointment/add-edit-appt/add-edit-appt.component';
import { SharedService } from './shared.service';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistrationComponent } from './patient/registration/registration.component';
import { EmpRegistrationComponent } from './employee/emp-registration/emp-registration.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    ShowEmpComponent,
    AddEditEmpComponent,
    LoginEmpComponent,
    PatientComponent,
    ShowPatComponent,
    AddEditPatComponent,
    LoginPatComponent,
    AppointmentComponent,
    ShowApptComponent,
    AddEditApptComponent,
    RegistrationComponent,
    EmpRegistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
