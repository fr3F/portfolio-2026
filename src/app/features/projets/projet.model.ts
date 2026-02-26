export interface Projet {
  id?: number;
  image: string;
  titre: string;
  description: string;
  stack: string[];
  lienOnline?: string;
  lienGitHub?: string;
  date?: string;
  entreprise?: string;
  categorie?: 'professionnel' | 'personnel' | 'stage' | 'academique';
}
