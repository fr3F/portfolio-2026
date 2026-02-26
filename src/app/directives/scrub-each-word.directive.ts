import {
  Directive,
  ElementRef,
  AfterViewInit,
  Inject,
  PLATFORM_ID
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { gsap, ScrollTrigger } from '../gsap/config';

@Directive({
  selector: '[scrubEachWord]',
  standalone: true
})
export class ScrubEachWordDirective implements AfterViewInit {

  constructor(
    private el: ElementRef<HTMLElement>,
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }

  ngAfterViewInit() {
    if (!isPlatformBrowser(this.platformId)) return;
    requestAnimationFrame(() => this.init());
  }

  private init() {
    const element = this.el.nativeElement;
    const text = element.innerText.trim();

    if (!text) return;

    element.innerHTML = text
      .split(' ')
      .map(word => `<span class="word inline-block">${word}&nbsp;</span>`)
      .join('');

    gsap.from(element.querySelectorAll('.word'), {
      opacity: 0.2,
      stagger: 0.3,
      ease: 'power1.out',
      scrollTrigger: {
        trigger: element,
        start: 'center 90%',
        end: 'top center',
        scrub: true
      }
    });

    ScrollTrigger.refresh();
  }
}
