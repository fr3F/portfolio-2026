import {
  AfterViewInit,
  Component,
  ElementRef,
  ViewChild,
  Inject,
  PLATFORM_ID,
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { InfiniteTickerComponent } from '../infinite-ticker/infinite-ticker.component';
import { LucideAngularModule, CodeXml } from 'lucide-angular';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-slide',
  standalone: true,
  imports: [CommonModule, InfiniteTickerComponent, LucideAngularModule],
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.css'],
})
export class SlideComponent implements AfterViewInit {
  @ViewChild('developpeur') developpeur!: ElementRef;
  @ViewChild('stack2') stack2!: ElementRef;
  @ViewChild('section') section!: ElementRef;
  readonly CodeXml = CodeXml;
  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  ngAfterViewInit() {
    if (!isPlatformBrowser(this.platformId)) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: this.section.nativeElement,
        start: 'center center',
        end: '+=300',
        scrub: true,
        markers: true,
      },
    });

    // Développeur disparaît
    tl.to(this.developpeur.nativeElement, {
      opacity: 0,
      y: -40,
      scale: 0.8,
      duration: 2,
    });

  }

}
