import { Projet } from "../features/projets/projet.model";

export const PROJETS_DATA: Projet[] = [
  // Projet de fin d'étude
  {
    id: 1,
    image: 'assets/images/solfy.png',
    titre: 'SOLFY - Transcription Audio en Partition',
    description: 'Application web d\'IA convertissant automatiquement un fichier audio en partition musicale avec détection de notes et séparation de pistes.',
    stack: ['Angular 18', 'Python', 'Flask', 'Spleeter', 'Librosa', 'Music21', 'MySQL'],
    lienGitHub: 'https://github.com/fr3F/.sofly',
    lienOnline: '',
    date: 'Juin 2025 – Oct. 2025',
    entreprise: 'Projet de fin d\'étude en Master II',
    categorie: 'academique'
  },

  // SODIM - Projets professionnels
  {
    id: 2,
    image: 'assets/images/ogc.png',
    titre: 'Gestion de Congés avec Notifications Temps Réel',
    description: 'Plateforme de gestion des demandes de congés avec notifications instantanées via Socket.IO pour managers et employés.',
    stack: ['Angular 18', 'Node.js', 'Socket.IO', 'Postman'],
    lienGitHub: 'https://github.com/fr3F/OGC_',
    lienOnline: '',
    date: 'Mai 2025 – Oct. 2025',
    entreprise: 'SODIM',
    categorie: 'professionnel'
  },
  {
    id: 3,
    image: 'assets/images/facturation-sage.png',
    titre: 'Application de Facturation avec Sage',
    description: 'Solution de génération et gestion de factures avec synchronisation automatique vers le système comptable Sage.',
    stack: ['Angular', 'API Sage'],
    lienGitHub: 'https://github.com/fr3F/factures-vers-sage',
    lienOnline: '',
    date: 'Mai 2025 – Oct. 2025',
    entreprise: 'SODIM',
    categorie: 'professionnel'
  },
  {
    id: 4,
    image: 'assets/images/rfid.png',
    titre: 'Système RFID - Gestion des Vols et Produits',
    description: 'Application de suivi en temps réel des produits via technologie RFID avec détection automatique des anomalies et inventaire.',
    stack: ['Angular', 'RFID', 'API REST'],
    lienGitHub: 'https://github.com/fr3F/RFID',
    lienOnline: '',
    date: 'Mai 2025 – Oct. 2025',
    entreprise: 'SODIM',
    categorie: 'professionnel'
  },
  {
    id: 5,
    image: 'assets/images/migration-angular.png',
    titre: 'Migration Angular 13 vers 18 - Gestion de Caisse',
    description: 'Modernisation d\'une application de caisse avec migration Angular 18 et intégration Ngrx Store pour performances optimales.',
    stack: ['Angular 13', 'Angular 18', 'Ngrx Store', 'RxJS'],
    lienGitHub: '',
    lienOnline: '',
    date: 'Mai 2025 – Oct. 2025',
    entreprise: 'SODIM',
    categorie: 'professionnel'
  },
  {
    id: 6,
    image: 'assets/images/Dépot.png',
    titre: 'Gestion de Stock Multi-Dépôt',
    description: 'Plateforme complète de gestion de stocks multi-sites avec tableau de bord interactif et authentification JWT.',
    stack: ['Angular', 'Node.js', 'Socket.IO', 'Sequelize', 'MySQL', 'JWT'],
    lienGitHub: 'https://bit.ly/Gestion-stock-multi-Depot',
    lienOnline: '',
    date: 'Avr. 2024 – Oct. 2024',
    entreprise: 'SODIM',
    categorie: 'stage'
  },

  // TechZara
  {
    id: 7,
    image: 'assets/images/techzara.png',
    titre: 'Site Hackathon Inter-Universitaire',
    description: 'Site vitrine moderne et responsive pour le Hackathon TechZara avec présentation des événements et activités.',
    stack: ['Angular', 'Tailwind CSS', 'TypeScript'],
    lienGitHub: '',
    lienOnline: 'https://techzara.vercel.app/',
    date: 'Jan. 2025 – Mars 2025',
    entreprise: 'TechZara',
    categorie: 'professionnel'
  },

  // Projets Personnels
  {
    id: 8,
    image: 'assets/images/text-summary.png',
    titre: 'Text Summary - Consultation de Contenu',
    description: 'Application web de consultation et lecture de contenus textuels/audio avec favoris, recherche et optimisation SEO.',
    stack: ['Angular 18', 'TypeScript', 'Tailwind CSS', 'Angular Universal'],
    lienGitHub: 'https://github.com/fr3F/text-summary.git',
    lienOnline: 'https://text-summary-three.vercel.app/',
    date: '27 Dec 2025',
    entreprise: 'Projet Personnel',
    categorie: 'personnel'
  },
  {
    id: 9,
    image: 'assets/images/svm-app.png',
    titre: 'SVM-App - Application Chorale Mobile',
    description: 'App mobile React Native pour chorales avec recherche de chansons, favoris et lecture audio intégrée.',
    stack: ['React Native', 'Expo', 'TypeScript', 'React Navigation', 'Expo Audio'],
    lienGitHub: 'https://github.com/fr3F/svm-app',
    lienOnline: '',
    date: '20 Dec 2025',
    entreprise: 'Projet Personnel',
    categorie: 'personnel'
  },
  {
    id: 10,
    image: 'assets/images/fiche-paie.png',
    titre: 'Calculateur de Fiche de Paie',
    description: 'Simulateur de bulletins de salaire avec calcul automatique des cotisations, IRSA et export PDF.',
    stack: ['Angular 18', 'TypeScript', 'Tailwind CSS', 'jsPDF', 'html2canvas'],
    lienGitHub: 'https://github.com/fr3F/TFP',
    lienOnline: 'https://tfp-eight.vercel.app/',
    date: '19 Dec 2025',
    entreprise: 'Projet Personnel',
    categorie: 'personnel'
  },
  {
    id: 11,
    image: 'assets/images/qrcode.png',
    titre: 'QR Code Generator',
    description: 'Générateur de QR Codes personnalisables avec modification des couleurs, taille et export PNG.',
    stack: ['Angular 18', 'TypeScript', 'Tailwind CSS', 'qrcode.js'],
    lienGitHub: 'https://github.com/fr3F/gerer_qrcode',
    lienOnline: 'https://qrcode-sand-xi.vercel.app',
    date: '16 Dec 2025',
    entreprise: 'Projet Personnel',
    categorie: 'personnel'
  },
  {
    id: 12,
    image: 'assets/images/portfolio.png',
    titre: 'Portfolio Professionnel',
    description: 'Portfolio interactif présentant compétences et projets avec design responsive et formulaire de contact.',
    stack: ['Angular', 'TypeScript', 'Tailwind CSS'],
    lienGitHub: '',
    lienOnline: 'https://frazakarivony.vercel.app/',
    date: 'Sept. 2024',
    entreprise: 'Projet Personnel',
    categorie: 'personnel'
  },
  {
    id: 13,
    image: 'assets/images/torche.png',
    titre: 'Application Mobile Torche Innovante',
    description: 'App Android avec modes d\'éclairage avancés (clignotant, SOS) et gestion optimisée de la batterie.',
    stack: ['Java Android'],
    lienGitHub: 'https://bit.ly/3QxH6Ai',
    lienOnline: '',
    date: 'Oct. 2024',
    entreprise: 'Projet Personnel',
    categorie: 'personnel'
  },

  // Value-IT
  {
    id: 14,
    image: 'assets/images/image-admin-Valu.png',
    titre: 'Portail de Recrutement en Ligne',
    description: 'Plateforme de recrutement avec espace candidat/admin, filtrage avancé et suivi sécurisé des candidatures.',
    stack: ['HTML', 'CSS', 'JavaScript', 'Java', 'Servlet', 'jQuery', 'MySQL'],
    lienGitHub: 'https://bit.ly/Creation-of-the-Value-ITWebsite',
    lienOnline: '',
    date: 'Avr. 2023 – Jui. 2023',
    entreprise: 'Value-IT',
    categorie: 'stage'
  }
];
