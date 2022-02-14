import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-emp',
  templateUrl: './show-emp.component.html',
  styleUrls: ['./show-emp.component.css']
})
export class ShowEmpComponent implements OnInit {

  constructor(private service:SharedService) { }

  EmployeeList:any=[];

  ModalTitle:string;
  ActiveAddEditEmp:boolean=false;
  emp:any;

  ngOnInit(): void {
    this.refreshEmpList();
  }

  refreshEmpList(){
    this.service.getEmployees().subscribe(data => {
      this.EmployeeList = data;
    });
  }

  addClick(){
    this.emp={
      Id:0,
      Firstname:"",
      Middlename:"",
      Lastname:"",
      Gender:"",
      Birthdate:"",
      EmployeeType:"",
      Username:"",
      Userpass:"",
    }
    this.ModalTitle = "Add Employee";
    this.ActiveAddEditEmp = true;
  }

  editClick(data:any){
    this.emp = data;
    this.ModalTitle = "Edit Employee";
    this.ActiveAddEditEmp = true;
  }

  deleteClick(id:number){
    this.service.deleteEmployee(id).subscribe( res =>{
      alert("Deleted Successfully");
      this.refreshEmpList();
    }, err =>{
      alert(err.status);
    });
  }

  closeClick(){
    this.refreshEmpList();
    this.ActiveAddEditEmp = false;
  }
}
