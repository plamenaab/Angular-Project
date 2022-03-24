import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-route-tester',
  templateUrl: './route-tester.component.html',
  styleUrls: ['./route-tester.component.css']
})
export class RouteTesterComponent implements OnInit {
  id: number = 0;
  pname: string = "";
  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.pname=this.route.snapshot.params['pname'];
  }

}
