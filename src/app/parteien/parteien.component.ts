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
        { parteiType: "Partei", name: "Christlich Demokratische Union", members: 2000 },
        { parteiType: "Partei", name: "Die Sozialpolitische Partei", members: 3000 },
    ];
    // addPartеi() {
    //   this.parteiList.push({
    //     parteiType: this.newParteiType,
    //     name: this.newParteiName,
    //     members: this.newParteiMembers
    //   })
    // }
    onAddPartei(parteiData: { parteiType: string, name: string, members: number }){

        this.parteiList.push({
        parteiType: parteiData.parteiType,
        name: parteiData.name,
        members: parteiData.members
    })
}
    
onRemovePartei(parteiId:{id: number}){
    this.parteiList.splice(parteiId.id, 1);
}
removePartei(id: number){
    this.parteiList.splice(id, 1);
}

// showInputName(event: Event) {
//     this.newParteiName = (<HTMLInputElement>event.target).value;
// }
constructor(){ }
}
