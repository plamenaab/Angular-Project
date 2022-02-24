import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({

  selector: 'app-add-partei',
  templateUrl: './add-partei.component.html',
  styleUrls: ['./add-partei.component.css']

})

export class AddParteiComponent implements OnInit {

  newParteiType = "";
  newParteiName = "";
  newParteiMembers = 0;

  @Output() parteiCreated = new EventEmitter<{parteiType: string, name: string, members: number}>();

  onParteiAdd(){

    this.parteiCreated.emit({
      parteiType: this.newParteiType,
      name: this.newParteiName,
      members: this.newParteiMembers
    });

  }
  constructor() { }
  ngOnInit(): void {

  }

}