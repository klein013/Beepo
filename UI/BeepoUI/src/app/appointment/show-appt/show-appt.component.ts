import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-show-appt',
  templateUrl: './show-appt.component.html',
  styleUrls: ['./show-appt.component.css'],
  providers: [DatePipe]
})
export class ShowApptComponent implements OnInit {

  constructor(private service:SharedService, private datePipe: DatePipe) { }

  readonly timeSlots:string[] = [ "08:00:00", "09:00:00", "10:00:00", "11:00:00", "12:00:00", "13:00:00", "14:00:00", "15:00:00", "16:00:00"];

  @Input() data:any;
  AppointmentList:any;
  DateToDisplay:any;
  ModalTitle:string;
  ActiveAddEditAppt:boolean=false;
  Appointment:any;
  User:any;
  AppointmentLength:number;


  ngOnInit(): void {
    this.refreshData();
    this.DateToDisplay = new Date();
    this.DateToDisplay = this.datePipe.transform(this.DateToDisplay, 'MM/dd/yyyy');
    var data = sessionStorage.getItem("user");
    if(data != ""){
      this.User = JSON.parse(data+'');
    }
    this.refreshData();
  }

  refreshData()
  {
    this.service.getAppointments().subscribe( data => {
      this.AppointmentList = data;
      this.AppointmentLength = data.length;
    });
  }

  addAppointment(slot:string){
    this.Appointment = {
      Id:0,
      Checkuptype:"",
      AppointmentDate: this.DateToDisplay +" "+slot,
      Comment:"",
      Appstatus:"Creation",
      EmployeeId:0,
      PatientId:this.User["Id"],
    }
    this.ModalTitle = "Set an Appointment";
    this.ActiveAddEditAppt = true;
  }

  editAppointment(data:any){
    this.Appointment = data;
    this.ModalTitle = "Edit Appointment";
    this.ActiveAddEditAppt = true;
  }

  closeClick(){
    this.Appointment = {
      Id:0,
      Checkuptype:"",
      AppointmentDate: "",
      Comment:"",
      Appstatus:"Creation",
      EmployeeId:0,
      PatientId:this.User["Id"],
    }
    this.ActiveAddEditAppt = false;

    this.refreshData();
  }

  deleteAppointment(id:number){
    this.service.deleteAppointment(id).subscribe(res =>{
      alert("Appointment successfully deleted");
      this.refreshData();
    }, err => {

    });
  }
}
