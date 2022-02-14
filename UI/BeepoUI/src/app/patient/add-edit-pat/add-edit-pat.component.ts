import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { Md5 } from 'ts-md5';

@Component({
  selector: 'app-add-edit-pat',
  templateUrl: './add-edit-pat.component.html',
  styleUrls: ['./add-edit-pat.component.css']
})
export class AddEditPatComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() pat:any;
  Id:number;
  Firstname:string;
  Middlename:string;
  Lastname:string;
  Gender:string;
  Birthdate:string;
  Username:string;
  Userpass:string;
  md5:any;


  ngOnInit(): void {
    this.md5 = new Md5();
    this.Id = this.pat.Id;
    this.Firstname = this.pat.Firstname;
    this.Middlename = this.pat.Middlename;
    this.Lastname = this.pat.Lastname;
    this.Gender = this.pat.Gender;
    this.Birthdate = this.pat.Birthdate;
    this.Username = this.pat.Username;
    this.Userpass = this.pat.Userpass;
  }

  addPatient(){
    var val = {
      Firstname : this.Firstname,
      Middlename : this.Middlename,
      Lastname : this.Lastname,
      Gender : this.Gender,
      Birthdate : this.Birthdate,
      Username : this.Firstname + "." + this.Lastname,
      Userpass : this.md5.appendStr(this.Firstname + "." + this.Lastname).end()
    };
    this.service.addPatient(val).subscribe(res =>{
      alert("Successfully Added");
    }, err => {
      alert(err.status);
    });
  }

  editPatient(){
    var val = {
      Id : this.Id,
      Firstname : this.Firstname,
      Middlename : this.Middlename,
      Lastname : this.Lastname,
      Gender : this.Gender,
      Birthdate : this.Birthdate,
      Username : this.Username,
      Userpass : this.Userpass
    };
    this.service.updatePatient(this.Id, val).subscribe(res =>{
      alert("Successfully Updated");
    }, err => {
      alert(err.status);
    });
  }

}
