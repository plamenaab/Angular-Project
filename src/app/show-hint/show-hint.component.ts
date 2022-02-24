import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-hint',
  templateUrl: './show-hint.component.html',
  styleUrls: ['./show-hint.component.css']
})
export class ShowHintComponent  {
  // i = 0;
  showFailed = false;
  hintsAvailable = [
    'Hint 1',
    'Hint 2',
    'Hint 3',
    'Hint 4',
    'Hint 5',
    'Hint 6',
    'Hint 7',
    'Hint 8',
    'Hint 9',
    'You failed'
  ]
  startHintsAvaiable = this.hintsAvailable.length
  hintsShown: string [] = [];
  getBgColor(num:number){

    if(num===(this.startHintsAvaiable)) return "black";
    if(num>(this.startHintsAvaiable/1.5 -1)) return "red";
    if(num>(this.startHintsAvaiable/3-1)) return "orange";
    return "white";
  }
  showHint(){
    if(this.showFailed) return;
    if (this.hintsAvailable.length === 0) {
      this.hintsShown.push("You Failed")
      this.showFailed = true;
    }
    let i: number = Math.floor(Math.random() * this.hintsAvailable.length);
    this.hintsShown.push(this.hintsAvailable[i]);
    this.hintsAvailable.splice(i, 1);
    // if(this.i>9) return;
    // this.i++;
    // if(this.i>9){
    //   this.hintsShown.push("You failed");
    //   return;
    // }
    // this.hintsShown.push(this.hintsAvailable[this.i]);
  }
  constructor() { }

 
}
