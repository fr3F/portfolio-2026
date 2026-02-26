import { AfterViewInit, Component, Inject, PLATFORM_ID } from '@angular/core';
import { TitreComponent } from './features/titre/titre.component';
import { SlideComponent } from './features/slide/slide.component';
import { FooterComponent } from './features/footer/footer.component';
import Lenis from 'lenis'
import { isPlatformBrowser } from '@angular/common';
import { MyServicesComponent } from './features/myServices/myServices.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { AvantageComponent } from './features/avantage/avantage.component';
import { ProjetsComponent } from './features/projets/projets.component';
import { StatsComponent } from './features/stats/stats.component';
import { AproposComponent } from './features/apropos/apropos.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    SlideComponent,
    FooterComponent,
    ProjetsComponent,
    MyServicesComponent,
    NavbarComponent,
    AvantageComponent,
    StatsComponent,
    AproposComponent

  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  ngAfterViewInit() {
    if (!isPlatformBrowser(this.platformId)) return;

    const lenis = new Lenis();
    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
  }

}
