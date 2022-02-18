import { Component } from "@angular/core";



@Component({
  selector: 'app-partei',
  templateUrl: './partei.component.html',

  styleUrls: ['./partei.component.css'],
})

export class ParteiComponent { 
    parteiType = "Partei";
    parteiName = "Christian Democratic Union";
    parteiMembers = 10000;
    myBool = true;
    getParteiFullName(){
        return `${this.parteiType} ${this.parteiName}`;
    }

}