import { Component, ElementRef, EventEmitter, Input, Output,OnInit, ViewChild } from '@angular/core';
import { LoggingService } from 'src/app/services/logging.service';

@Component({
  selector: 'app-candidate-list',
  templateUrl: './candidate-list.component.html',
  styleUrls: ['./candidate-list.component.css']
})
export class CandidateListComponent  {
  @Input() candidates!:string[];
  @Input() parteiId!:number;
  @Output() canidateCreated = new EventEmitter<{candidateName:string}>();
  constructor(private loggingService: LoggingService ) { }

  onAddCandidate(newCandidateNameInput: HTMLInputElement) {
    this.loggingService.logParteiDataChange("Adding candidate list comp:" + newCandidateNameInput.value);
    this.canidateCreated.emit({
      candidateName:newCandidateNameInput.value,
    });
	}

  ngOnInit(): void {
  }
  // onAddCandidate(candidate: string) {
  //   this.candidates.push(candidate)
  // }

}


