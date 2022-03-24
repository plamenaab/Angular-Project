import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ParteiDataService } from '../services/parteiData.service';

@Component({
  selector: 'app-view-partei',
  templateUrl: './view-partei.component.html',
  styleUrls: ['./view-partei.component.css']
})
export class ViewParteiComponent implements OnInit {
  id: number = 0;
  partei:{ parteiType: string, name: string, members: number, candidateList: string[] }={
    parteiType:"",
    name:"",
    members:0,
    candidateList:[]
  };
  parteiType="";
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private parteiDataService: ParteiDataService,

  ) { }

  ngOnInit(): void {
    this.id=+this.route.snapshot.params['id'];
    this.partei = this.parteiDataService.parteiList[this.id];
    if(this.partei === undefined){ //access not exsting partei
      this.parteiType = "";
      this.router.navigate(['/parteilist']);
      return;
    }else{
      this.parteiType = this.partei.parteiType;
      this.route.params.subscribe(
        (params:Params)=>{
          this.id = +params['id'];
          this.partei = this.parteiDataService.parteiList[this.id];
          if(this.partei === undefined){ //access not exsting partei
            this.parteiType = "";
            this.router.navigate(['/parteilist']);
            return;
          }else{
            this.parteiType = this.partei.parteiType;
          }
        }
      )
    }
  }

}
