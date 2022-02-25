import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-candidate-list',
  templateUrl: './candidate-list.component.html',
  styleUrls: ['./candidate-list.component.css']
})
export class CandidateListComponent implements OnInit {
  @Input() candidates!:string[];
  constructor() { }

  ngOnInit(): void {
  }

}


