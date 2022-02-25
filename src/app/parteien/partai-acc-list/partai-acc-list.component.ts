import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-partai-acc-list',
  templateUrl: './partai-acc-list.component.html',
  styleUrls: ['./partai-acc-list.component.css']
})
export class PartaiAccListComponent implements OnInit {
  @Input('partei') parteiElement!:{parteiType:string, name:string, members:number, candidateList:string[]};
  @Input() parteiId!:number;
  constructor() { }

  ngOnInit(): void {
  }

}
