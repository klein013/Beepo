import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EmployeeComponent } from './employee/employee.component';
import { PatientComponent } from './patient/patient.component';
import { AppointmentComponent } from './appointment/appointment.component';

const routes: Routes = [
  { path : '', component:PatientComponent},
  { path : 'registration', component:PatientComponent},
  { path : 'patient', component:PatientComponent},
  { path : 'appointment', component:AppointmentComponent},
  { path : 'show', component:EmployeeComponent},
  { path : 'login', component:EmployeeComponent},
  { path : 'empregistration', component:EmployeeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
