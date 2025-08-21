import { Component } from '@angular/core';
import { MailService } from '../mail.service';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.css']
})
export class MailComponent {
  mails:any[]=[];
  constructor(private _message:MailService){
  _message.getmails().subscribe(
    (app:any)=>{
      console.log(app);
      this.mails=app;
      console.log(this.mails);
    },(err:any)=>{
      alert("Internal Server error")
    }
  )
}

}
