import { Component, ElementRef, Inject, PLATFORM_ID, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-avantage',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './avantage.component.html',
  styleUrls: ['./avantage.component.css'],
})
export class AvantageComponent implements AfterViewInit {
  @ViewChild('projetsSection') projetsSection!: ElementRef<HTMLElement>;
  @ViewChild('avantagesContainer') avantagesContainer!: ElementRef<HTMLElement>;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  ngAfterViewInit() {
    if (!isPlatformBrowser(this.platformId)) return;

    const container = this.avantagesContainer.nativeElement;

    // On anime seulement la moitié de la largeur (car doublé)
    const distance = container.scrollWidth / 2;

    gsap.to(container, {
      x: -distance,
      ease: "none",
      scrollTrigger: {
        trigger: this.projetsSection.nativeElement,
        start: "top bottom",
        end: () => "+=" + distance,
        scrub: 0.5,
        invalidateOnRefresh: true,
        // markers: true,             // décommente en dev pour debugger
      }
    });
  }

  skills = [
    'Figma', 'Photoshop', 'Illustrator', 'GSAP', 'AOS',
    'Angular', 'TypeScript', 'RxJS', 'ngRx', 'TailwindCSS',
    'Git', 'Vercel', 'Railway', 'Node.js', 'BitBucket', 'Jira'
  ];

  get skillsDoubled() {
    return [...this.skills, ...this.skills];
  }
}
