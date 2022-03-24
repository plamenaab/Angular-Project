import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ParteiDataService } from '../../services/parteiData.service';

@Component({
  selector: 'app-politic',
  templateUrl: './politic.component.html',
  styleUrls: ['./politic.component.css']
})
export class PoliticComponent implements OnInit {
  partei:{parteiType:string, name:string, members:number, candidateList:string[]}={
    parteiType:"",
    name:"",
    members:0,
    candidateList:[]
  };
  id:number = -1;
  constructor(
    private parteiDataService: ParteiDataService,
    private route: ActivatedRoute

  ) { }

  ngOnInit(): void {
    //this.id=+this.route.snapshot.params['id'];
    //this.partei = this.parteiDataService.parteiList[this.id];
    this.route.params.subscribe(
      (params: Params) =>{
        this.id=+params['id'];
        this.partei = this.parteiDataService.parteiList[this.id];

      }
    )
  }

}
