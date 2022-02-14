import { Component, OnInit } from '@angular/core';
import { Router,NavigationStart, Event as NavigationEvent   } from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  
  currentRoute: string;
  routelength:number;

  constructor(private router:Router) { 
    this.currentRoute = this.router.url;
    this.routelength = this.router.url.length;
  }
  ngOnInit(): void {
  }

}
