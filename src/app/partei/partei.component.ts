import { Component, Input, Output, EventEmitter, ViewEncapsulation } from "@angular/core";


@Component({
  selector: 'app-partei',
  templateUrl: './partei.component.html',
  styleUrls: ['./partei.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
})

export class ParteiComponent { 
  @Input('parteiEl') parteiElement!: { parteiType: string, name: string, members: number };
  @Input() parteiId!:number;
  @Input() testhtml!:string;
  // @Output() parteiDeleted = new EventEmitter<{id:number}>();

  //   removePartei(parteiId:number){
  //     this.parteiDeleted.emit({id: parteiId});
  //   }
    getParteiFullName(){
      return `${this.parteiElement.parteiType} ${this.parteiElement.name}!`;
    }

}
