import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router,NavigationStart, Event as NavigationEvent   } from '@angular/router';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit{
  
  currentRoute: string;

  constructor(private router:Router) { 
    this.currentRoute = this.router.url;
  }
  ngOnInit(): void {
  }

}
