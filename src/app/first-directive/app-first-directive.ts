import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
    selector: '[app-first-directive]'
})
export class FirstDirective implements OnInit{
    constructor(private elementRef:ElementRef){
        console.log(this.elementRef);
    }

    ngOnInit(){
        //console.log(this.elementRef);
        this.elementRef.nativeElement.style.backgroundColor='yellow';
    }
    // directive code
}