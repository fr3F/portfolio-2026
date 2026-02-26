import {
  AfterViewInit,
  Component,
  Inject,
  PLATFORM_ID
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

import AOS from 'aos';
import 'aos/dist/aos.css';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-apropos',
  standalone: true,
  templateUrl: './apropos.component.html',
  styleUrls: ['./apropos.component.css'],
})
export class AproposComponent implements AfterViewInit {

  description = "Développeur passionné, je suis motivé par la satisfaction des utilisateurs, les défis techniques et l’apprentissage continu pour créer des solutions performantes et innovantes.";

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {

      // GSAP plugins côté navigateur uniquement
      gsap.registerPlugin(ScrollTrigger);

      // Initialiser AOS
      AOS.init({
        disable: false,
        once: false,
        duration: 800,
        easing: 'ease-in-out',
      });

      // Rafraîchir après rendu DOM
      setTimeout(() => {
        AOS.refreshHard();
      }, 0);
    }
  }
}
