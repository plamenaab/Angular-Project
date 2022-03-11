import { 
  Directive, 
  ElementRef, 
  HostListener, 
  OnInit, 
  Renderer2, 
  RendererStyleFlags2 
} from '@angular/core';

@Directive({
  selector: '[appSecondDirective]'
})
export class SecondDirectiveDirective implements OnInit {

  constructor(
    private elementRef: ElementRef, 
    private renderer: Renderer2,
  ) { }
  ngOnInit() {
    //this.elementRef.nativeElement.style.backgroundColor = 'cyan';
    // this.renderer.setStyle(this.elementRef.nativeElement, "background-color", "cyan", RendererStyleFlags2.Important);
  }
  @HostListener('mouseenter') mouseOnElement(evData: Event){
    this.renderer.setStyle(this.elementRef.nativeElement, "background-color", "cyan", RendererStyleFlags2.Important);   
  }
  @HostListener('mouseleave') mouseOutElement(evData: Event){
    this.renderer.setStyle(this.elementRef.nativeElement, "background-color", "", RendererStyleFlags2.Important);   
  }  
}


