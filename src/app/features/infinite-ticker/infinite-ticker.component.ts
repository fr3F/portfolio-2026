// infinite-ticker.component.ts

import { AfterViewInit, Component, ElementRef, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';   // ← import this
import { gsap } from 'gsap';

@Component({
  selector: 'app-infinite-ticker',
  templateUrl: './infinite-ticker.component.html',
  styleUrls: ['./infinite-ticker.component.css'],
  standalone: true
})
export class InfiniteTickerComponent implements AfterViewInit {
  constructor(
    private el: ElementRef,
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }

  ngAfterViewInit(): void {
    // Skip everything on server → only run in browser
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const tickers = this.el.nativeElement.querySelectorAll('.ticker') as NodeListOf<HTMLElement>;

    Array.from(tickers).forEach((ticker: HTMLElement) => {
      const inner = ticker.querySelector('.ticker-wrap') as HTMLElement | null;
      if (!inner) return;

      const content = inner.querySelector('.ticker-text') as HTMLElement | null;
      if (!content) return;

      const duration = Number(ticker.dataset['duration']) || 20;

      // Now safe: append exists
      inner.appendChild(content.cloneNode(true));   // or inner.append(...)

      const animations: gsap.core.Tween[] = [];

      (inner.querySelectorAll('.ticker-text') as NodeListOf<HTMLElement>).forEach((el) => {
        const anim = gsap.to(el, {
          x: '-100%',
          repeat: -1,
          duration,
          ease: 'linear'
        });
        animations.push(anim);
      });

      ticker.addEventListener('mouseenter', () => animations.forEach(a => a.pause()));
      ticker.addEventListener('mouseleave', () => animations.forEach(a => a.play()));
    });
  }
}
