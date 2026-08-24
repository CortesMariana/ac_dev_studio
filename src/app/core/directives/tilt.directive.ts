import { isPlatformBrowser } from '@angular/common';
import { Directive, ElementRef, HostListener, PLATFORM_ID, inject } from '@angular/core';
import { gsap } from 'gsap';

@Directive({
  selector: '[appTilt]',
})
export class TiltDirective {
  private readonly el = inject(ElementRef<HTMLElement>);
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent): void {
    if (!this.isBrowser) return;

    const rect = this.el.nativeElement.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width - 0.5;
    const py = (event.clientY - rect.top) / rect.height - 0.5;

    gsap.to(this.el.nativeElement, {
      rotateX: py * -8,
      rotateY: px * 8,
      transformPerspective: 800,
      duration: 0.4,
      ease: 'power2.out',
    });
  }

  @HostListener('mouseleave')
  onMouseLeave(): void {
    if (!this.isBrowser) return;

    gsap.to(this.el.nativeElement, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.6,
      ease: 'power3.out',
    });
  }
}
