import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { SharedService } from 'src/app/shared.service';
import { Md5 } from 'ts-md5';

@Component({
  selector: 'app-add-edit-emp',
  templateUrl: './add-edit-emp.component.html',
  styleUrls: ['./add-edit-emp.component.css']
})
export class AddEditEmpComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() emp:any;
  Id:number;
  Firstname:string;
  Middlename:string;
  Lastname:string;
  Gender:string;
  Birthdate:string;
  EmployeeType:string;
  Username:string;
  Userpass:string;
  md5:any;


  ngOnInit(): void {
    this.md5 = new Md5();
    this.Id = this.emp.Id;
    this.Firstname = this.emp.Firstname;
    this.Middlename = this.emp.Middlename;
    this.Lastname = this.emp.Lastname;
    this.Gender = this.emp.Gender;
    this.Birthdate = this.emp.Birthdate;
    this.EmployeeType = this.emp.EmployeeType;
    this.Username = this.emp.Username;
    this.Userpass = this.emp.Userpass;
  }

  addEmployee(){
    var val = {
      Firstname : this.Firstname,
      Middlename : this.Middlename,
      Lastname : this.Lastname,
      Gender : this.Gender,
      Birthdate : this.Birthdate,
      EmployeeType : this.EmployeeType,
      Username : this.Firstname + "." + this.Lastname,
      Userpass : this.md5.appendStr(this.Firstname + "." + this.Lastname).end()
    };
    this.service.addEmployee(val).subscribe(res =>{
      alert("Successfully Added");
    }, err => {
      alert(err.status);
    });
  }

  editEmployee(){
    var val = {
      Id : this.Id,
      Firstname : this.Firstname,
      Middlename : this.Middlename,
      Lastname : this.Lastname,
      Gender : this.Gender,
      Birthdate : this.Birthdate,
      EmployeeType : this.EmployeeType,
      Username : this.Username,
      Userpass : this.Userpass
    };
    this.service.updateEmployee(this.Id, val).subscribe(res =>{
      alert("Successfully Updated");
    }, err => {
      alert(err.status);
    });
  }
}
