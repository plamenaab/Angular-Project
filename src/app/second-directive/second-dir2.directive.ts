import { 
  Directive, 
  ElementRef, 
  HostBinding, 
  HostListener, 
  Input, 
  OnInit
} from '@angular/core';
@Directive({
  selector: '[appSecondDir2]'
})
export class SecondDir2Directive implements OnInit {
  @Input() defaultColor:string = "cyan";
  @Input('appSecondDir2') mouseOverColor:string="orange";
  //@Input() mouseOverColor:string="yellow";
  @HostBinding('style.backgroundColor') backgroundColor:string="" ;

  constructor(
    private elementRef: ElementRef, 
  ) { }
  ngOnInit() {
    this.backgroundColor = this.defaultColor;
    //this.elementRef.nativeElement.style.backgroundColor = 'cyan';
    // this.renderer.setStyle(this.elementRef.nativeElement, "background-color", "cyan", RendererStyleFlags2.Important);
  }
  @HostListener('mouseenter', ['$event']) mouseOnElement(evData: Event){
    // this.renderer.setStyle(this.elementRef.nativeElement, "background-color", "cyan", RendererStyleFlags2.Important);   
    console.log(this.mouseOverColor);

    this.backgroundColor = this.mouseOverColor;
    //console.log(evData);
  }
  @HostListener('mouseleave') mouseOutElement(evData: Event){
    // this.renderer.setStyle(this.elementRef.nativeElement, "background-color", "", RendererStyleFlags2.Important);  
    this.backgroundColor = this.defaultColor;
  }  

}
