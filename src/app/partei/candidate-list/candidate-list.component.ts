import { Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-candidate-list',
  templateUrl: './candidate-list.component.html',
  styleUrls: ['./candidate-list.component.css']
})
export class CandidateListComponent  {
  @Input() candidates!:string[];
  @ViewChild('newCandidateListInput') newCandidateListInput!:ElementRef;
  constructor() { }

  // onCandidateAdd(newCandidateListInput: HTMLInputElement) {
  //   candidate: this.newCandidateListInput.nativeElement.value;
  //   newCandidateListInput.value="";
	// }

  onCandidateAdd(candidate: string) {
    this.candidates.push(candidate)
  }

}


