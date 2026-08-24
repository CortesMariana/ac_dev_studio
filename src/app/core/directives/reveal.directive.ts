import { isPlatformBrowser } from '@angular/common';
import { Directive, ElementRef, Input, OnDestroy, OnInit, PLATFORM_ID, inject } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export type RevealVariant = 'up' | 'down' | 'left' | 'right' | 'scale' | 'fade';

@Directive({
  selector: '[appReveal]',
})
export class RevealDirective implements OnInit, OnDestroy {
  @Input('appReveal') variant: RevealVariant = 'up';
  @Input() revealDelay = 0;

  private readonly el = inject(ElementRef<HTMLElement>);
  private readonly platformId = inject(PLATFORM_ID);
  private scrollTrigger?: ScrollTrigger;

  ngOnInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    gsap.registerPlugin(ScrollTrigger);

    const from: gsap.TweenVars = {
      opacity: 0,
      duration: 0.9,
      delay: this.revealDelay,
      ease: 'power3.out',
    };

    switch (this.variant) {
      case 'up':
        from['y'] = 46;
        break;
      case 'down':
        from['y'] = -46;
        break;
      case 'left':
        from['x'] = -46;
        break;
      case 'right':
        from['x'] = 46;
        break;
      case 'scale':
        from['scale'] = 0.86;
        break;
    }

    const tween = gsap.from(this.el.nativeElement, {
      ...from,
      scrollTrigger: {
        trigger: this.el.nativeElement,
        start: 'top 85%',
        toggleActions: 'play none none reverse',
      },
    });

    this.scrollTrigger = tween.scrollTrigger;
  }

  ngOnDestroy(): void {
    this.scrollTrigger?.kill();
  }
}
