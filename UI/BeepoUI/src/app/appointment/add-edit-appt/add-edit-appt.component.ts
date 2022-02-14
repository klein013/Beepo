import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-appt',
  templateUrl: './add-edit-appt.component.html',
  styleUrls: ['./add-edit-appt.component.css']
})
export class AddEditApptComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input()appointment:any;
  Id:number;
  Checkuptype:string;
  AppointmentDate:string;
  Appstatus:string;
  EmployeeId:any;
  PatientId:any;
  Comment:string;
  doctors:any;
  SelDoctor:any;

  ngOnInit(): void {
    this.Id = this.appointment.Id;
    this.Checkuptype = this.appointment.Checkuptype;
    this.AppointmentDate = this.appointment.AppointmentDate;
    this.Appstatus = this.appointment.Appstatus;
    this.EmployeeId = this.appointment.EmployeeId;
    this.PatientId = this.appointment.PatientId;
    this.Comment = this.appointment.Comment;
    this.refreshData();
  }

  refreshData(){
    this.service.getDoctors().subscribe( data => {
      this.doctors = data;
    });
  }

  selectOption(){
    this.service.getEmployee(this.EmployeeId).subscribe(res =>{
      this.SelDoctor = res;
    });
  }

  addAppointment(){
    var patient = sessionStorage.getItem("user");
    var doctor = this.SelDoctor;
    var data = {
      Checkuptype : this.Checkuptype,
      AppointmentDate : this.AppointmentDate,
      Comment : this.Comment,
      Appstatus : "Pending",
      Employee : doctor,
      Patient : JSON.parse(patient+'')
    };

    this.service.addAppointment(data).subscribe(res => {
      this.refreshData();
      alert("Appointment added");
    }, err => {
      alert("Cannot set appointment");
    });
  }

  editAppointment(){

  }

}
