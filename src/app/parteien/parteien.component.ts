import { Component, OnInit } from '@angular/core';
import { LoggingService } from '../services/logging.service';
import { ParteiDataService } from '../services/parteiData.service';

@Component({
  selector: 'app-parteien', // element
  // selector: '.app-parteien', //classname
  // selector: '[app-parteien]', // attribute


  templateUrl: './parteien.component.html',
  styleUrls: ['./parteien.component.css'],
  // styles: [`h4{display: inline;}`,]
  providers: [] 

})
export class ParteienComponent implements OnInit {
  parteiFilter = "";
  parteiList:{parteiType:string, name:string, members:number, candidateList:string[]}[]=[];
  // newParteiName = "add some name here";
  // newParteiNameTWB = "add some name TWB";
  // newParteiType = "";
  // newParteiName = "";
  // newParteiMembers = 0;

  //moved to Service
  // parteiList = [
  //   {
  //     parteiType: "Partei", name: "Christlich Demokratische Union", members: 2000,
  //     candidateList: [
  //       'Candidate CDU 1',
  //       'Candidate CDU 2',
  //       'Candidate CDU 3',
  //       'Candidate CDU 4',
  //     ]
  //   },
  //   {
  //     parteiType: "Partei", name: "Die Sozialpolitische Partei", members: 3000, candidateList: [
  //       'Candidate DSP 1',
  //       'Candidate DSP 2',
  //       'Candidate DSP 3',
  //       'Candidate DSP 4',
  //     ]
  //   },

  // ]

  // addPartai() {
  //   this.parteiList.push({
  //     parteiType: this.newParteiType,
  //     name: this.newParteiName,
  //     members: this.newParteiMembers
  //   })
  // }

  // testhtml = "<b>this is test html</b>";
  // onAddPartai(partaiData: { parteiType: string, name: string, members: number, candidateList:string[] }) {
  //   this.parteiList.push({
  //     parteiType: partaiData.parteiType,
  //     name: partaiData.name,
  //     members: partaiData.members,
  //     candidateList: []
  //   });
  // }
  // onAddCandidate(candidateData:{parteiId:number, candidateName: string}){
  //   //console.log('Candidate added');
  //   this.loggingService.logParteiDataChange("Parteien add new candidate:" + candidateData.candidateName);
  //   this.parteiList[candidateData.parteiId].candidateList.push(candidateData.candidateName);
  // }
  // onRemovePartei(partaiId:{id:number}){
  //   this.parteiList.splice(partaiId.id, 1);
  // }
  removePartei(id: number) {
    this.parteiDataService.removePartei(id); 
    //this.parteiList.splice(id, 1);
  }
  // showInputName(event: Event) {
  //     this.newParteiName = (<HTMLInputElement>event.target).value;
  // }


  constructor(
      private loggingService: LoggingService,
      private parteiDataService: ParteiDataService,
  ) 
  {
    // setTimeout(
    //   () => {
    //     //this.parteiList[0].parteiType = "Coalition";
    //   }, 3000)
  }
  ngOnInit(): void {
    this.parteiList = this.parteiDataService.parteiList;
  }
}
