import { Component, OnInit } from '@angular/core';
import { ParteiDataService } from '../services/parteiData.service';

@Component({
  selector: 'app-politics',
  templateUrl: './politics.component.html',
  styleUrls: ['./politics.component.css']
})
export class PoliticsComponent implements OnInit {
  parteiList:{parteiType:string, name:string, members:number, candidateList:string[]}[]=[];
  constructor(
    private parteiDataService: ParteiDataService,
  ) { }

  ngOnInit(): void {
    this.parteiList = this.parteiDataService.parteiList;
  }

}
