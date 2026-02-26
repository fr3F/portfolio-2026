import { AfterViewInit, Component, Inject, PLATFORM_ID, ViewChild } from '@angular/core';
import { CountUp } from 'countup.js';
import { TitreComponent } from '../titre/titre.component';
import { isPlatformBrowser } from '@angular/common';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-stats',
  standalone: true,
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css'],
  imports: [TitreComponent],
})
export class StatsComponent implements AfterViewInit {
  @ViewChild(TitreComponent) titreComp!: TitreComponent;
  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }
  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.titreComp.setTitre('Mes Chiffres Clé');
      this.titreComp.setCouleur('text-yellow-400');

      gsap.registerPlugin(ScrollTrigger);

      // CountUp pour les chiffres
      const hours = new CountUp('hours', 500, { duration: 5 });
      hours.start();

      const tech = new CountUp('tech', 3, { duration: 5 });
      tech.start();

      const exp = new CountUp('exp', 2, { duration: 5, prefix: '+' });
      exp.start();
    }

  }
}
