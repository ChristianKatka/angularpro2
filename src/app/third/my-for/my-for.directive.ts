import { Directive, Input, ViewContainerRef, TemplateRef } from '@angular/core';

@Directive({
  selector: '[myFor][myForOf]',
})
export class MyForDirective {
  @Input()
  set myForOf(collection) {
    // clear the RENDER/VIEW and then recreate  it
    this.view.clear();
    // foreach gives us item and index
    collection.forEach((item, index) => {

      this.view.createEmbeddedView(this.template, {
          // 
        $implicit: item,
        index,
        // same as index: index
      });
    });
  }

  constructor(
    private view: ViewContainerRef,
    private template: TemplateRef<any>
  ) {}
}
