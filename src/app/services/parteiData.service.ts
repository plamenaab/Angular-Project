import { Injectable } from "@angular/core";
import { LoggingService } from "./logging.service";

@Injectable()

export class ParteiDataService {
    parteiList = [
        {
            parteiType: "Koalit", name: "Christlich Demokratische Union", members: 2000,
            candidateList: [
                'Candidate CDU 1',
                'Candidate CDU 2',
                'Candidate CDU 3',
                'Candidate CDU 4',
            ]
        },
        {
            parteiType: "Koalit", name: "Die Sozialpolitische Partei", members: 3000, candidateList: [
                'Candidate DSP 1',
                'Candidate DSP 2',
                'Candidate DSP 3',
                'Candidate DSP 4',
            ]
        },
    ];

    constructor(
        private loggingService: LoggingService,
    ) { }


    removePartei(id: number) {
        this.parteiList.splice(id, 1);
        this.loggingService.logParteiDataChange("Deleted partei: " + id);
    }
    addPartei(parteiData: { parteiType: string, name: string, members: number, candidateList: string[] }) {
        this.parteiList.push({
            parteiType: parteiData.parteiType,
            name: parteiData.name,
            members: parteiData.members,
            candidateList: []
        });
        this.loggingService.logParteiDataChange("Added new partei:" + parteiData.name);
    }
    addCandidate(candidateData: { parteiId: number, candidateName: string }) {
        //console.log('Candidate added');
        this.parteiList[candidateData.parteiId].candidateList.push(candidateData.candidateName);
        this.loggingService.logParteiDataChange("Added candidate: " + candidateData.candidateName);
    }
    updateCandidate(candidateData: { parteiId: number, candidateId:number, candidateName: string }){
        this.parteiList[candidateData.parteiId].candidateList[candidateData.candidateId]=candidateData.candidateName;
    }
}