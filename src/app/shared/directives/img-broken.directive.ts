import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: 'img[appImgBroken]'
})
export class ImgBrokenDirective {
  @HostListener('error') handleError():void{
    this.elementRef.nativeElement.src = 'https://t3.ftcdn.net/jpg/02/15/14/24/360_F_215142493_N4zguDaD5wuu3d7giEz8HUxTLBHAWaYj.jpg';
  }
//
  constructor(private elementRef:ElementRef) { 

  }

}
