import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  readonly APIUrl = "http://localhost:8000/api";
  readonly EmployeeUrl = "/Employee";
  readonly AppointmentUrl = "/Appointment";
  readonly PatientUrl = "/Patient";
  
  constructor( private http:HttpClient ) { }

  //Employees
  getEmployees():Observable<any[]> {
    return this.http.get<any>(this.APIUrl + this.EmployeeUrl + '/All');
  }

  getEmployee(id:number|string):Observable<any>{
    return this.http.get(this.APIUrl + this.EmployeeUrl + `/All/${id}` );
  }

  addEmployee(data:any){
    return this.http.post(this.APIUrl + this.EmployeeUrl, data);
  }

  updateEmployee(id:number|string, data:any ):Observable<any>{
    return this.http.put(this.APIUrl + this.EmployeeUrl + `/${id}`, data);
  }

  deleteEmployee(id:number|string){
    return this.http.delete(this.APIUrl + this.EmployeeUrl + `/${id}`);
  }

  loginEmployee(data:any){
    return this.http.post(this.APIUrl + this.EmployeeUrl + '/login', data);
  }

  getDoctors(){
    return this.http.get(this.APIUrl + this.EmployeeUrl + "/doctors");
  }

  //Patient
  getPatients():Observable<any[]> {
    return this.http.get<any>(this.APIUrl + this.PatientUrl);
  }

  getPatient(id:number|string):Observable<any>{
    return this.http.get<any>(this.APIUrl + this.PatientUrl + `/${id}` );
  }

  addPatient(data:any){
    return this.http.post(this.APIUrl + this.PatientUrl, data);
  }

  updatePatient(id:number|string, data:any ):Observable<any>{
    return this.http.put(this.APIUrl + this.PatientUrl + `/${id}`, data);
  }

  deletePatient(id:number|string){
    return this.http.delete(this.APIUrl + this.PatientUrl + `/${id}`);
  }

  loginPatient(data:any){
    return this.http.post(this.APIUrl + this.PatientUrl + '/login', data);
  }

  //Appointment
  getAppointments():Observable<any[]> {
    return this.http.get<any>(this.APIUrl + this.AppointmentUrl);
  }

  getAppointment(id:number|string):Observable<any>{
    return this.http.get<any>(this.APIUrl + this.AppointmentUrl + `/${id}` );
  }

  addAppointment(data:any){
    return this.http.post(this.APIUrl + this.AppointmentUrl, data);
  }

  updateAppointment(id:number|string, data:any ):Observable<any>{
    return this.http.put(this.APIUrl + this.AppointmentUrl + `/${id}`, data);
  }

  deleteAppointment(id:number|string){
    return this.http.delete(this.APIUrl + this.AppointmentUrl + `/${id}`);
  }

  getAppointmentByDate(date:string){
    return this.http.get(this.APIUrl + this.AppointmentUrl + `/${date}`);
  }

}
