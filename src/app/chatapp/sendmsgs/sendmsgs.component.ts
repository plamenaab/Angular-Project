import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';


@Component({
  selector: 'app-sendmsgs',
  templateUrl: './sendmsgs.component.html',
  styleUrls: ['./sendmsgs.component.css']
})
export class SendmsgsComponent implements OnInit {
  @ViewChild('fEl') msgForm!: NgForm;


  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }
  onSendMsg(){
    const formData: any = new FormData();
    formData.append('sender', this.msgForm.value.sender);
    formData.append('chatmsg', this.msgForm.value.chatmsg);
    // http://kabinata.com/wp/2016js/chat.php
    this.http
    .post('http://kabinata.com/wp/2016js/chat.php', formData)
    // .post('https://shkolo22.000webhostapp.com/chat.php',formData)
    .subscribe( {
      next: postData =>{
       console.log(postData);
      },
      error: (myerror)=>{console.log(myerror)},
    });
    this.msgForm.reset();
    // console.log(this.sender, this.msg);
  }
}
