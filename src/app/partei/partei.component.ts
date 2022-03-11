import { Component, Input, ViewEncapsulation, OnInit, OnChanges, SimpleChanges, ViewChild, ElementRef, Output, EventEmitter, OnDestroy, ContentChild, AfterContentInit } from "@angular/core";
import { LoggingService } from "../services/logging.service";

@Component({
  selector: 'app-partei',
  templateUrl: './partei.component.html',
  styleUrls: ['./partei.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
})

export class ParteiComponent 
      implements 
    OnInit,
    // OnChanges, 
    // DoCheck, 
    AfterContentInit
    // AfterContentChecked,
    // AfterViewInit,
    // AfterViewChecked,
    // OnDestroy
  {
  @Input('parteiEl') parteiElement!: { parteiType: string, name: string, members: number, candidateList:string[] };
  @Input() parteiId!:number;
  @Input() testhtml!:string;
  @Input() parteiType!:string;
  @Input() testArray!:number[];
  @Output() onCanidateCreated = new EventEmitter<{parteiId:number, candidateName:string}>();
  @ViewChild('myH4Element') myH4Element!:ElementRef;
  @ContentChild('contentButton') contentButton!:ElementRef;
  showList=false;
  constructor(private loggingService: LoggingService){
    // console.log("Constructor called");
    // setTimeout(
    //   () =>{
    //     this.parteiType="NewPartei";
    //   },5000)
  }
  getParteiFullName(){
    return `${this.parteiElement.parteiType} ${this.parteiElement.name}!`;
  }
  canidateCreated(candidateData: {candidateName:string}){

    // console.log("New candidate", candidateData.candidateName, 
    // " ID:", this.parteiId);
    //emit to parent 
    this.loggingService.logParteiDataChange('partei comp add candidate:' + candidateData.candidateName);
     this.onCanidateCreated.emit({
     parteiId: this.parteiId,
     candidateName:candidateData.candidateName,
     });
  }
  changeParteiType(){
    // this.parteiType = "NewParteiType";
    // this.parteiElement.members=1000;
    // this.testArray.push(4);
  }

  // ngOnChanges(smplChanges: SimpleChanges):void{

  //   console.log("ngOnChanges called");
  //   console.log(smplChanges);
  //   console.log("H4 element:");
  //   console.log(this.myH4Element);
  // }
  ngOnInit(): void {
  //   console.log("ngOnInit called");
  //   console.log("H4 element:");
  //   console.log(this.myH4Element);
  }

  // ngDoCheck(): void{
  //   console.log("doCheck called");
  //   console.log("Type is:" + this.parteiType);
  //   console.log("H4 element:");
  //   console.log(this.myH4Element);    
  // }
  ngAfterContentInit():void{
  //   console.log("ngAfterContentInit called");
  //   console.log("H4 element:");
  //   console.log(this.myH4Element); 
  }
  // ngAfterContentChecked():void{
  //   console.log("ngAfterContentChecked called");
  //   console.log("Type is:" + this.parteiType);
  //   console.log("H4 element:");
  //   console.log(this.myH4Element);
  // }
  // ngAfterViewInit(): void{
  //   console.log("ngAfterViewInit called");
  //   console.log("H4 element:");
  //   console.log(this.myH4Element);    
  // }

  // ngAfterViewChecked():void{
  //   console.log("ngAfterViewChecked called");   
  // }
  // ngOnDestroy(): void{
  //   console.log("Object destroyed. Id was:", this.parteiId);
  // }

  // @Output() parteiDeleted = new EventEmitter<{id:number}>();

  // removePartei(parteiId:number){
  //   this.parteiDeleted.emit({id:parteiId})
  // }
  


}
