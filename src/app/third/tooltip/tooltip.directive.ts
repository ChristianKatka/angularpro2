import { Input, Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[tooltip]',
  // export so it can be used as element ref
  exportAs: 'tooltip',
})
export class TooltipDirective implements OnInit {
  tooltipElement = document.createElement('div');
  visible = false;

  // value is gonna be string and its gonna be SETted to the tooltip element
  @Input()
  set tooltip(value) {
    this.tooltipElement.textContent = value;
  }

  // remove class name 
  hide() {
    this.tooltipElement.classList.remove('tooltip--active');
  }

  // add class name
  show() {
    this.tooltipElement.classList.add('tooltip--active');
  }

  constructor(private element: ElementRef) {}

  ngOnInit() {
      // adding class name tooltip to the element
    this.tooltipElement.className = 'tooltip';

    this.element.nativeElement.appendChild(this.tooltipElement);
    this.element.nativeElement.classList.add('tooltip-container');
  }
}
