import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appStructural]'
})
export class StructuralDirective {
  @Input() set appStructural(obj:{countMembers: number,nameInput:string, typeInput:string}){
    if(obj.countMembers>10 && obj.nameInput !== "" && obj.typeInput!==""){
      // do something
      this.containerRef.clear();
      this.containerRef.createEmbeddedView(this.templateRef);
    }else{
      // do something else
      this.containerRef.clear();
    }
  }

  constructor(
    private templateRef: TemplateRef<any>,
    private containerRef: ViewContainerRef
  ) { }

}
