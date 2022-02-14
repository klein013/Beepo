import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { Md5 } from 'ts-md5';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login-pat',
  templateUrl: './login-pat.component.html',
  styleUrls: ['./login-pat.component.css']
})
export class LoginPatComponent implements OnInit {

  constructor(private service:SharedService, private router:Router) { }

  @Input() user:any;
  Username:string;
  Userpass:string;
  md5:any;


  ngOnInit(): void {
    this.md5 = new Md5();
    this.Username = this.user.Username;
    this.Userpass = this.user.Userpass;
  }

  submitPass(){
    var data = {
      Firstname : "1",
      Lastname : "1",
      Username : this.Username,
      Userpass : this.md5.appendStr(this.Userpass).end()
    }

    this.service.loginPatient(data).subscribe(res => {
      sessionStorage.setItem('user', JSON.stringify(res));
      this.router.navigateByUrl('/appointment', res);
    }, err => {
      alert("Username and password not found");
    });

  }
  
  register(){
    this.router.navigateByUrl('/registration');
  }

  employeeLogin(){
    this.router.navigateByUrl('/login');
  }
}
