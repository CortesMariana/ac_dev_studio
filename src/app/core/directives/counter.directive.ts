import { isPlatformBrowser } from '@angular/common';
import { Directive, ElementRef, Input, OnInit, PLATFORM_ID, inject } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Directive({
  selector: '[appCounter]',
})
export class CounterDirective implements OnInit {
  @Input('appCounter') to = 0;
  @Input() counterSuffix = '';
  @Input() counterDuration = 1.6;

  private readonly el = inject(ElementRef<HTMLElement>);
  private readonly platformId = inject(PLATFORM_ID);

  ngOnInit(): void {
    if (!isPlatformBrowser(this.platformId)) {
      this.el.nativeElement.textContent = `${this.to}${this.counterSuffix}`;
      return;
    }

    gsap.registerPlugin(ScrollTrigger);
    const counter = { value: 0 };

    gsap.to(counter, {
      value: this.to,
      duration: this.counterDuration,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: this.el.nativeElement,
        start: 'top 90%',
        once: true,
      },
      onUpdate: () => {
        this.el.nativeElement.textContent = `${Math.round(counter.value)}${this.counterSuffix}`;
      },
    });
  }
}
