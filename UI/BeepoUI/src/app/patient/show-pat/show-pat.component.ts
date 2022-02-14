import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-pat',
  templateUrl: './show-pat.component.html',
  styleUrls: ['./show-pat.component.css']
})
export class ShowPatComponent implements OnInit {

  constructor(private service:SharedService) { }

  PatientList:any=[];

  ModalTitle:string;
  ActiveAddEditPat:boolean=false;
  pat:any;

  ngOnInit(): void {
    this.refreshPatList();
  }

  refreshPatList(){
    this.service.getPatients().subscribe(data => {
      this.PatientList = data;
    });
  }

  addClick(){
    this.pat={
      Id:0,
      Firstname:"",
      Middlename:"",
      Lastname:"",
      Gender:"",
      Birthdate:"",
      Username:"",
      Userpass:"",
    }
    this.ModalTitle = "Add Patient";
    this.ActiveAddEditPat = true;
  }

  editClick(data:any){
    this.pat = data;
    this.ModalTitle = "Edit Patient";
    this.ActiveAddEditPat = true;
  }

  deleteClick(id:number){
    this.service.deletePatient(id).subscribe( res =>{
      alert("Deleted Successfully");
      this.refreshPatList();
    }, err =>{
      alert(err.status);
    });
  }

  closeClick(){
    this.refreshPatList();
    this.ActiveAddEditPat = false;
  }
}
