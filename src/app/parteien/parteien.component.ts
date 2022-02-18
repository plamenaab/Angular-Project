import { Component } from '@angular/core';

@Component({
    selector: 'app-parteien', // element
    // selector: '.app-parteien', //classname
    // selector: '[app-parteien]', // attribute


    templateUrl: './parteien.component.html',
    // styleUrls: ['./parteien.component.css']
    styles: [`h4{display: inline;}`,]
})
export class ParteienComponent {
    newParteiName = "add some name here";
    newParteiNameTWB = "add some name TWB"
    showInputName(event: Event){
        this.newParteiName = (<HTMLInputElement>event.target).value;
    }
    constructor(){}
}
