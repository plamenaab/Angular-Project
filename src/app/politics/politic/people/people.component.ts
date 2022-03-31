import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ParteiDataService } from '../../../services/parteiData.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
  id:number = -1;
  peopleList:string[] = [];
  filterString = "";
  constructor(
    private parteiDataService: ParteiDataService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id=+this.route.snapshot.params['id'];
    this.peopleList = this.parteiDataService.parteiList[this.id].candidateList;
  }

}
