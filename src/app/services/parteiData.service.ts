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
    removePartei(id: number) {
        this.parteiList.splice(id, 1);
    }
    addPartai(partaiData: { parteiType: string, name: string, members: number, candidateList: string[] }) {
        this.parteiList.push({
            parteiType: partaiData.parteiType,
            name: partaiData.name,
            members: partaiData.members,
            candidateList: []
        });
    }
}