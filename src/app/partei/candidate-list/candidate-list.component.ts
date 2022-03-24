import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LoggingService } from 'src/app/services/logging.service';
import { ParteiDataService } from 'src/app/services/parteiData.service';

@Component({
  selector: 'app-candidate-list',
  templateUrl: './candidate-list.component.html',
  styleUrls: ['./candidate-list.component.css'],
})
export class CandidateListComponent implements OnInit {
  candidates: string[] = [];
  editCandidateId: number = -1;
  @Input() parteiId!: number;
  // @Output() canidateCreated = new EventEmitter<{ candidateName: string }>();
  constructor(
    private loggingService: LoggingService,
    private parteiDataService: ParteiDataService,

  ) { }
  onAddCandidate(newCandidateNameInput: HTMLInputElement) {
    this.parteiDataService.addCandidate({
      parteiId: this.parteiId,
      candidateName: newCandidateNameInput.value
    });

    // let logged = {parteiId: this.parteiId, candidateName : newCandidateNameInput.value};
    // console.log(logged);
    //this.loggingService.logParteiDataChange("Adding candidate list comp:" + newCandidateNameInput.value);
    // this.canidateCreated.emit({
    //   candidateName: newCandidateNameInput.value,
    // });
  }
  onUpdateCandidate(editCandidateNameInput: HTMLInputElement) {
    if (this.editCandidateId >= 0) {
      this.parteiDataService.updateCandidate({
        parteiId: this.parteiId,
        candidateId: this.editCandidateId,
        candidateName: editCandidateNameInput.value
      });
    }
    this.editCandidateId = -1;
  }
  ngOnInit(): void {
    this.candidates = this.parteiDataService.parteiList[this.parteiId].candidateList;
  }

}


