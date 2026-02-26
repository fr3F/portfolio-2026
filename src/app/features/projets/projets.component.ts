import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Inject,
  PLATFORM_ID,
  ViewChild
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { TitreComponent } from '../titre/titre.component';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Projet } from './projet.model';
import { PROJETS_DATA } from '../../data/projets.data';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-projets',
  standalone: true,
  imports: [CommonModule, TitreComponent],
  templateUrl: './projets.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjetsComponent implements AfterViewInit {
  @ViewChild('projetsSection') projetsSection!: ElementRef<HTMLElement>;
  @ViewChild('projetsContainer') projetsContainer!: ElementRef<HTMLElement>;
  @ViewChild('projetsContainerMobile') projetsContainerMobile!: ElementRef<HTMLElement>;
  @ViewChild(TitreComponent) titreCom!: TitreComponent;

  readonly projets: Projet[] = PROJETS_DATA;
  projetsAffiches = [...this.projets];
  filtreActif: 'all' | 'online' | 'github' = 'all';

  private progressCircle!: HTMLElement | null;

  @ViewChild('progressCircle') set progressCircleRef(el: ElementRef) {
    this.progressCircle = el?.nativeElement;
  }

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  ngAfterViewInit() {
    this.titreCom.setTitre('Mes Projets Professionnels');
    if (!isPlatformBrowser(this.platformId)) return;

    const section = this.projetsSection?.nativeElement;
    const container = this.projetsContainer?.nativeElement;

    // GSAP scroll horizontal desktop
    if (section && container) {
      setTimeout(() => this.setupHorizontalScroll(section, container), 100);
    }

    // Scroll natif mobile/tablette → progress circle
    const mobile = this.projetsContainerMobile?.nativeElement;
    if (mobile) {
      mobile.addEventListener('scroll', () => {
        if (this.progressCircle) {
          const max = mobile.scrollWidth - mobile.clientWidth;
          const progress = max > 0 ? mobile.scrollLeft / max : 0;
          const circumference = 2 * Math.PI * 42;
          const offset = circumference * (1 - progress);
          this.progressCircle.style.strokeDashoffset = offset.toString();
        }
      });
    }
  }

  private setupHorizontalScroll(section: HTMLElement, container: HTMLElement) {
    const getScrollDistance = () => container.scrollWidth - window.innerWidth;
    let scrollDistance = getScrollDistance();

    gsap.to(container, {
      x: () => -scrollDistance,
      ease: 'none',
      scrollTrigger: {
        trigger: section,
        start: 'top top',
        end: () => `+=${scrollDistance + 200}`,
        scrub: 0.4,
        pin: true,
        pinSpacing: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          if (this.progressCircle) {
            const circumference = 2 * Math.PI * 42;
            const offset = circumference * (1 - self.progress);
            this.progressCircle.style.strokeDashoffset = offset.toString();
          }
        },
        onRefresh: () => {
          scrollDistance = getScrollDistance();
          ScrollTrigger.refresh(true);
        }
      }
    });
  }

  filtrer(type: 'all' | 'online' | 'github') {
    this.filtreActif = type;

    if (type === 'all') {
      this.projetsAffiches = [...this.projets];
    } else if (type === 'online') {
      this.projetsAffiches = this.projets.filter(p => p.lienOnline?.trim());
    } else {
      this.projetsAffiches = this.projets.filter(p => p.lienGitHub?.trim());
    }

    // Reset position desktop
    if (this.projetsContainer?.nativeElement && isPlatformBrowser(this.platformId)) {
      gsap.to(this.projetsContainer.nativeElement, { x: 0, duration: 0.6, ease: 'power2.out' });
    }

    // Reset position mobile
    if (this.projetsContainerMobile?.nativeElement) {
      this.projetsContainerMobile.nativeElement.scrollLeft = 0;
    }
  }

  get estVide() {
    return this.projetsAffiches.length === 0;
  }

  getButtonStyle(type: 'all' | 'online' | 'github') {
    const active = this.filtreActif === type;
    const base = 'px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-offset-2 active:scale-95 shadow-sm';

    if (active) {
      if (type === 'all') return `${base} bg-gray-900 font-outfit text-white ring-gray-400/40 scale-105`;
      if (type === 'online') return `${base} bg-blue-600 font-outfit text-white ring-blue-400/40 scale-105`;
      if (type === 'github') return `${base} bg-purple-600 font-outfit text-white ring-purple-400/40 scale-105`;
    }

    if (type === 'all') return `${base} bg-white text-gray-800 font-outfit border border-gray-300 hover:bg-gray-100 hover:border-gray-400`;
    if (type === 'online') return `${base} bg-white text-blue-700 font-outfit border border-blue-300 hover:bg-blue-50 hover:border-blue-400`;
    if (type === 'github') return `${base} bg-white text-purple-700 font-outfit border border-purple-300 hover:bg-purple-50 hover:border-purple-400`;

    return base;
  }
}
