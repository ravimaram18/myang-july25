import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
    loginform:FormGroup=new FormGroup ({
      username: new FormControl(),
      password: new FormControl(),
    })
    constructor(private authservice:AuthService,private router:Router){}
    login(){
      console.log(this.loginform.value);
      this.authservice.login(this.loginform.value).subscribe(
        (data:any)=>{
          alert("login Successfully");
          //storage token in browser
          localStorage.setItem('token',data.accessToken);
          //go to dashboard
          this.router.navigateByUrl('/dashboard');
        },
        (err:any)=>{
          alert("Invalid Credentials")
        }
      )
    }
}
