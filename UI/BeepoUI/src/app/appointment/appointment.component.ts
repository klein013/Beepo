import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {

  constructor() { }

  User:any;

  ngOnInit(): void {
    var data = sessionStorage.getItem("user");
    if(data != ""){
      this.User = JSON.parse(data+'');
    }
  }

}
