import { Component, signal } from '@angular/core';
import { ScrubEachWordDirective } from '../../directives/scrub-each-word.directive';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-titre',
  standalone: true,
  imports: [ScrubEachWordDirective, CommonModule],
  templateUrl: './titre.component.html',
  styleUrls: ['./titre.component.css']
})
export class TitreComponent {
  titre = signal('');
  couleur = signal('');

  setTitre(val: string) {
    this.titre.set(val);
  }
  setCouleur(val: string) {
    this.couleur.set(val)
  }
}
