import {Directive, ElementRef, Host, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appRipple]'
})
export class RippleDirective {
  @Input() public appRipple: string = 'ripple'

  constructor(private el: ElementRef) {

  }

  @HostListener('mouseenter') onMouseEnter() {
    console.log(this.appRipple)
    this.el.nativeElement.classList.add(this.appRipple);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.classList.remove(this.appRipple);
  }
}
