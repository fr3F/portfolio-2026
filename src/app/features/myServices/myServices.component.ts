import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ViewChild,
  PLATFORM_ID,
  Inject,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { TitreComponent } from '../titre/titre.component';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-myServices',
  standalone: true,
  imports: [TitreComponent],
  templateUrl: './myServices.component.html',
  changeDetection: ChangeDetectionStrategy.Default,
  styleUrls: ['./myServices.component.css'],
})
export class MyServicesComponent implements AfterViewInit {
  @ViewChild(TitreComponent) titreCom!: TitreComponent;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  ngAfterViewInit() {
    if (!isPlatformBrowser(this.platformId)) return;
    this.titreCom.setTitre('Mes services');
  }
}
