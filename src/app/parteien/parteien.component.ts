import { Component } from '@angular/core';

@Component({
    selector: 'app-parteien', // element
    // selector: '.app-parteien', //classname
    // selector: '[app-parteien]', // attribute


    templateUrl: './parteien.component.html',
    styleUrls: ['./parteien.component.css']
    // styles: [`h4{display: inline;}`,]
})
export class ParteienComponent {
    // newParteiName = "add some name here";
    // newParteiNameTWB = "add some name TWB"
    // showInputName(event: Event){
    //     this.newParteiName = (<HTMLInputElement>event.target).value;
    // }
    parteiList = [
        {
          parteiType: "Partei", name: "Christlich Demokratische Union", members: 2000,
          candidateList: [
            'Candidate CDU 1',
            'Candidate CDU 2',
            'Candidate CDU 3',
            'Candidate CDU 4',
          ]
        },
        {
          parteiType: "Partei", name: "Die Sozialpolitische Partei", members: 3000, candidateList: [
            'Candidate DSP 1',
            'Candidate DSP 2',
            'Candidate DSP 3',
            'Candidate DSP 4',
          ]
        },
    
      ]
    testArray:number[] = [1,2,3];
    // addPartеi() {
    //   this.parteiList.push({
    //     parteiType: this.newParteiType,
    //     name: this.newParteiName,
    //     members: this.newParteiMembers
    //   })
    // }
    testhtml = "<b>this is test html</b>"
    onAddPartei(partaiData: { parteiType: string, name: string, members: number }) {
        this.parteiList.push({
          parteiType: partaiData.parteiType,
          name: partaiData.name,
          members: partaiData.members,
          candidateList: []
        })
      }
    
// onRemovePartei(parteiId:{id: number}){
//     this.parteiList.splice(parteiId.id, 1);
// }
removePartei(id: number){
    this.parteiList.splice(id, 1);
}

// showInputName(event: Event) {
//     this.newParteiName = (<HTMLInputElement>event.target).value;
// }
constructor() {
    // setTimeout(()=>{
    //   this.parteiList
    // },3000)
   }
}
