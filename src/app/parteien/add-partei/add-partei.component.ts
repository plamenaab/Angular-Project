import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';
import { LoggingService } from 'src/app/services/logging.service';
import { ParteiDataService } from '../../services/parteiData.service';
@Component({

  selector: 'app-add-partei',
  templateUrl: './add-partei.component.html',
  styleUrls: ['./add-partei.component.css']

})

export class AddParteiComponent implements OnInit {

  // newParteiType = "";
  // newParteiName = "";
  newParteiMembers = 0;

  @Output() parteiCreated = new EventEmitter<{parteiType: string, name: string, members: number, candidateList: string[]}>();
  @ViewChild('newParteiTypeInput') newParteiTypeInput!:ElementRef;
  
  
  constructor(
    private loggingService: LoggingService,
    private parteiDataService: ParteiDataService,
  ) { }

  ngOnInit(): void { }
  
  onParteiAdd(newParteiNameInput: HTMLInputElement){

    this.loggingService.logParteiDataChange('new partai is created:' + newParteiNameInput.value);
    this.parteiDataService.addPartai({
      parteiType: this.newParteiTypeInput.nativeElement.value,
      name: newParteiNameInput.value,
      members: this.newParteiMembers,
      candidateList: []
    })
    newParteiNameInput.value="";
    // this.newMembersInput.nativeElement.value=0;
    // this.newParteiType="";
    this.newParteiMembers=0;
  }
 

}