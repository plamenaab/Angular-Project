import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-candidate-list',
  templateUrl: './candidate-list.component.html',
  styleUrls: ['./candidate-list.component.css']
})
export class CandidateListComponent  {
  @Output() candidateCreated = new EventEmitter<{candidateName: string}>();
  @Input() candidates!:string[];
  @Input() parteiId!:number;
  constructor() { }

  onAddCandidate(newCandidateNameInput: HTMLInputElement) {
    this.candidateCreated.emit({
      candidateName: newCandidateNameInput.value,
    });
	}


  // onAddCandidate(candidate: string) {
  //   this.candidates.push(candidate)
  // }

}


