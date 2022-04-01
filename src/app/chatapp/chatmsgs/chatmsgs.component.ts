import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Msgs } from './msgs.model';

@Component({
  selector: 'app-chatmsgs',
  templateUrl: './chatmsgs.component.html',
  styleUrls: ['./chatmsgs.component.css']
})
export class ChatmsgsComponent implements OnInit {
  chatmsgs:Msgs[] = [];
  constructor(private http: HttpClient) { }

  ngOnInit(): void {

    // homework - add setInterval 
    // additional homework -> using chatmsgs.php?lastmsg=number;
    this.getChatMsgs();
  }
  getChatMsgs(){
    const url = 'http://kabinata.com/wp/2016js/chatmsgs.php';
    // const url = 'https://shkolo22.000webhostapp.com/chatmsgs.php';
    this.http
    .get<{chatmsgs: Msgs[]}>(url)
    .subscribe( {next: (msgData) =>{
      this.chatmsgs = msgData.chatmsgs;
      // console.log(this.chatmsgs);
    },
    error: (myerror)=>{console.log(myerror)},
  })
  }
}
