import type { Dict } from './en'

const fr: Dict = {
  meta: {
    title: 'dsync — tous vos appareils, une seule conversation',
    description:
      'Envoyez du texte, des fichiers et des dossiers de toute taille entre vos ordinateurs et votre téléphone, partagez le presse-papiers et contrôlez vos autres ordinateurs. Chiffré, sur votre propre réseau.',
  },
  nav: { features: 'Fonctionnalités', remote: 'Contrôle à distance', download: 'Télécharger', star: 'Étoile', language: 'Langue' },
  hero: {
    version: 'Version {v}',
    latest: 'Dernière version',
    title1: 'Tous vos appareils,',
    title2: 'une seule conversation.',
    lead: "Envoyez du texte, des fichiers et des dossiers entiers de toute taille entre vos ordinateurs et votre téléphone, partagez le presse-papiers et prenez le contrôle d'un autre écran. Directement sur votre propre réseau, chiffré de bout en bout.",
    download: 'Télécharger dsync',
    downloadFor: 'Télécharger pour {name}',
    androidApp: 'Application Android',
    iphoneApp: 'Application iPhone',
    alsoHtml: 'Aussi pour <a href="#download">d\'autres systèmes</a>.',
  },
  alt: {
    hero: 'dsync sous Linux, en conversation avec un PC Windows',
    dark: 'Une conversation en mode sombre, avec des fichiers et un transfert en cours',
    control: 'Options du contrôle à distance : écran, taille et qualité',
    phoneList: 'Les ordinateurs associés sur le téléphone',
    phoneChat: 'Une conversation sur le téléphone avec un fichier à enregistrer',
    qr: "Le code QR qu'affiche un ordinateur pour connecter un téléphone",
    settings: 'Réglages de dsync : presse-papiers partagé et fonctionnement en arrière-plan',
  },
  send: {
    eyebrow: 'Envoyez tout',
    title: 'Texte, fichiers et dossiers. De toute taille.',
    text: "Chaque appareil est une conversation. Tapez une commande, collez une capture d'écran ou déposez un dossier de 200 photos : il arrive dans le dossier Téléchargements de l'autre côté.",
    points: [
      'Aucune limite de taille. Une ISO de 6 Go passe à la vitesse maximale du réseau.',
      "Les transferts reprennent là où ils s'étaient arrêtés si le Wi-Fi coupe.",
      'Chaque fichier est vérifié avec SHA-256 à son arrivée.',
    ],
  },
  remote: {
    eyebrow: 'Contrôle à distance',
    title: 'Utilisez un autre ordinateur depuis celui-ci.',
    text: "Ouvrez l'autre écran dans une fenêtre ou en plein écran, avec votre propre souris et votre clavier. dsync configure Sunshine et Moonlight pour vous : l'image est assez nette et fluide pour travailler vraiment.",
    points: [
      "Choisissez l'écran, la taille et la netteté.",
      'Souris « bureau » ou « jeu », avec sa propre vitesse de pointeur.',
      "S'associe tout seul la première fois : pas de code PIN à taper à l'autre bout de la pièce.",
    ],
  },
  phone: {
    eyebrow: 'Application mobile',
    title: 'Votre téléphone est de la partie.',
    text: "Envoyez des photos et des fichiers de votre téléphone vers un ordinateur, ou récupérez ce qu'un ordinateur vous a envoyé. Collez le presse-papiers du téléphone, renvoyez un lien, enregistrez ou partagez n'importe quel fichier.",
    noteHtml:
      'Sur iPhone, installez le fichier avec <a href="https://altstore.io">AltStore</a> ou <a href="https://sideloadly.io">Sideloadly</a> et votre identifiant Apple (iOS 16.4 ou plus récent).',
  },
  private: {
    eyebrow: 'Confidentiel par conception',
    title: 'Associez une fois. Chiffré toujours.',
    text: "Les appareils se trouvent sur votre réseau. Associez-les en vérifiant que les deux écrans affichent le même code, ou scannez un code QR avec votre téléphone. Ensuite, tout ce qui passe entre eux est chiffré, et rien ne transite par un serveur.",
    points: [
      'TLS 1.3 avec clés épinglées entre ordinateurs.',
      'XSalsa20-Poly1305 entre téléphone et ordinateur.',
      "Fonctionne via Tailscale quand vous n'êtes pas chez vous.",
    ],
  },
  tray: {
    eyebrow: 'Discret',
    title: 'Presse-papiers, arrière-plan et mises à jour.',
    text: "Copiez sur un ordinateur et collez sur l'autre, images comprises. dsync reste dans la zone de notification, démarre avec votre ordinateur et se met à jour depuis GitHub en un clic.",
    points: [
      'Un presse-papiers partagé que vous pouvez désactiver à tout moment.',
      "Effacez une conversation ou tout l'historique quand vous voulez.",
      'Les mises à jour sont vérifiées avec les sommes de contrôle de la version.',
    ],
  },
  anim: { other: 'PC du bureau', self: 'Cet ordinateur', screen: 'écran', input: 'souris et clavier', label: "Cet ordinateur affiche et contrôle l'écran d'un autre ordinateur" },
  download: {
    title: 'Télécharger',
    lead: "{version}. Gratuit, et il ne communique qu'avec vos propres appareils.",
    forYou: 'Pour cet appareil',
    all: 'Tous les fichiers et notes de version →',
  },
  modal: {
    title: 'Télécharger dsync pour {name}',
    ask: "dsync est gratuit et développé par une seule personne. S'il vous est utile, une étoile sur GitHub aide d'autres personnes à le découvrir.",
    star: 'Mettre une étoile sur GitHub',
    go: 'Télécharger',
    done: 'Le téléchargement a commencé. Merci !',
    again: 'Télécharger à nouveau',
    close: 'Fermer',
  },
  footer: { source: 'Code source sur GitHub' },
  platforms: {
    windows: {
      name: 'Windows',
      kind: "Programme d'installation",
      note: 'Windows 10 et 11. Configure le pare-feu pour vous.',
      tip: "Si Windows affiche « Éditeur inconnu » ou « Windows a protégé votre ordinateur », cliquez sur « Informations complémentaires », puis « Exécuter quand même ». Le programme d'installation n'est pas encore signé.",
    },
    mac: {
      name: 'macOS',
      kind: 'Image disque',
      note: 'Apple Silicon et Intel. La première fois : clic droit → Ouvrir.',
      tip: "Ouvrez l'image disque et glissez dsync dans Applications. La première fois, faites un clic droit sur dsync et choisissez Ouvrir.",
    },
    arch: {
      name: 'Arch Linux',
      kind: 'Paquet',
      note: 'Installez avec sudo pacman -U. Aussi CachyOS, Manjaro.',
      tip: "Installez-le avec : sudo pacman -U dsync-*.pkg.tar.zst",
    },
    linux: {
      name: 'Linux',
      kind: 'Archive',
      note: 'Décompressez et lancez ./install.sh. Nécessite WebKitGTK 4.1.',
      tip: "Décompressez-la et lancez ./install.sh. L'installation se fait pour votre utilisateur, sans root.",
    },
    android: {
      name: 'Android',
      kind: 'APK',
      note: "Ouvrez-le sur votre téléphone et autorisez l'installation depuis votre navigateur.",
      tip: "Ouvrez le fichier téléchargé sur votre téléphone. Android demande une fois d'autoriser l'installation d'applications depuis votre navigateur.",
    },
    ios: {
      name: 'iPhone',
      kind: 'Application non signée',
      note: 'Installez avec AltStore ou Sideloadly et votre identifiant Apple. iOS 16.4+.',
      tip: "Installez le .ipa avec AltStore ou Sideloadly et votre identifiant Apple. Activez d'abord le mode développeur dans Réglages → Confidentialité et sécurité.",
    },
  },
}

export default fr
