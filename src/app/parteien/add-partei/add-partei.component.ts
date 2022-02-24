import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({

  selector: 'app-add-partei',
  templateUrl: './add-partei.component.html',
  styleUrls: ['./add-partei.component.css']

})

export class AddParteiComponent implements OnInit {

  // newParteiType = "";
  // newParteiName = "";
  // newParteiMembers = 0;

  @Output() parteiCreated = new EventEmitter<{parteiType: string, name: string, members: number}>();
  @ViewChild('newParteiTypeInput') newParteiTypeInput!:ElementRef;
  @ViewChild('newMembersInput') newMembersInput!:ElementRef;
  onParteiAdd(newParteiNameInput: HTMLInputElement){

    this.parteiCreated.emit({
      parteiType: this.newParteiTypeInput.nativeElement.value,
      name: newParteiNameInput.value,
      members: this.newMembersInput.nativeElement.value
    });
    newParteiNameInput.value="";
    this.newMembersInput.nativeElement.value=0;
    // this.newParteiType="";
    // newParteiMembers=0;
  }
  constructor() { }
  ngOnInit(): void {

  }

}