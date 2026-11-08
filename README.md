# AUCHAN & Co — Plateforme E-commerce

Application web e-commerce développée avec **HTML5, Tailwind CSS, JavaScript ES6+ et Vite**, dans le cadre du projet pédagogique *Auchan & Co 2026* à YouCode.

L'objectif est de créer une interface e-commerce dynamique, responsive et modulaire, permettant aux utilisateurs de consulter un catalogue, rechercher des produits, gérer un panier et utiliser le Drag & Drop.

**Application en ligne :** https://auchan-co.vercel.app/

**Dépôt GitHub :** https://github.com/AstaAT1/Auchan

## 1. Fonctionnalités réalisées

### Catalogue des produits
- Chargement des produits depuis un fichier JSON local avec l'API Fetch.
- Affichage dynamique des produits : image, nom, catégorie et prix.
- Recherche instantanée par nom.
- Filtrage des produits par catégorie.
- Pagination limitée à 8 produits par page.
- Basculement entre les vues Liste et Grille avec Flexbox.

### Gestion du panier
- Ajout d'un produit avec le bouton « Ajouter au panier ».
- Détection des produits déjà présents et augmentation automatique de leur quantité.
- Affichage détaillé du panier dans une fenêtre modale.
- Suppression d'un produit du panier.
- Calcul automatique du montant total en fonction des prix et des quantités.
- Sauvegarde et restauration du panier avec LocalStorage.

### Drag & Drop
- Possibilité de faire glisser une carte produit vers l'icône du panier.
- Identification du produit sélectionné avec `dragstart` et `dataTransfer`.
- Ajout automatique au panier lors de l'événement `drop`.
- Compatibilité avec les produits affichés après recherche, filtrage ou pagination.

### Formulaire de contact
Une page `contact.html` contenant les champs suivants :

- Nom complet
- Adresse email
- Téléphone
- Message

Le formulaire utilise des expressions régulières (Regex) pour vérifier les données, afficher les erreurs et confirmer la validation. Les champs sont réinitialisés uniquement lorsque les données sont valides.

**Remarque :** le formulaire est une démonstration de validation côté client. Il n'envoie pas de messages à un serveur.

## 2. Technologies utilisées

| Technologie | Utilisation |
|---|---|
| HTML5 | Structure des pages |
| Tailwind CSS | Interface responsive et composants visuels |
| JavaScript ES6+ | Logique métier, événements et DOM |
| Fetch API | Chargement du catalogue JSON |
| LocalStorage | Persistance du catalogue et du panier |
| JSON | Stockage et échange des données |
| Vite | Serveur de développement et build de production |
| Font Awesome | Icônes de l'interface |
| Git / GitHub | Versionnement du projet |
| Vercel | Hébergement et déploiement |

## 3. Structure du projet

```text
Auchan/
├── index.html
├── contact.html
├── data/
│   └── data.json
├── assets/
│   └── images/
├── public/
│   ├── data/
│   │   └── data.json
│   └── assets/
│       └── images/
├── css/
│   └── style.css
├── js/
│   ├── main.js
│   ├── api.js
│   ├── products.js
│   ├── cart.js
│   ├── dragDrop.js
│   ├── storage.js
│   ├── ui.js
│   └── validation.js
├── vite.config.js
├── package.json
├── README.md
└── Documentation.md
```

### Organisation JavaScript

| Fichier | Responsabilité |
|---|---|
| `main.js` | Initialisation de l'application et coordination des modules |
| `api.js` | Récupération des produits avec Fetch |
| `products.js` | Recherche, filtrage et pagination |
| `cart.js` | Ajout, suppression, doublons et calcul des totaux |
| `dragDrop.js` | Gestion du glisser-déposer |
| `storage.js` | Sauvegarde et lecture du LocalStorage |
| `ui.js` | Affichage dynamique et interactions DOM |
| `validation.js` | Validation du formulaire avec Regex |

## 4. Installation et lancement

### Prérequis

Avoir **Node.js** et **npm** installés sur son ordinateur.

### Cloner le projet

```bash
git clone https://github.com/AstaAT1/Auchan.git
cd Auchan
```

### Installer les dépendances

```bash
npm install
```

### Lancer le serveur de développement

```bash
npm run dev
```

Ouvrir l'adresse locale affichée dans le terminal, généralement :

`http://localhost:5173/`

La page de contact est accessible depuis :

`http://localhost:5173/contact.html`

## 5. Build de production

Générer la version optimisée :

```bash
npm run build
```

Tester cette version localement :

```bash
npm run preview
```

Le dossier `dist/` contient les fichiers construits pour la production.

Le dossier `public/` permet notamment de rendre disponibles le catalogue JSON et les images des produits dans la version déployée.

## 6. Architecture et fonctionnement

L'application repose sur une architecture modulaire utilisant `import` et `export`.

Le catalogue est chargé avec Fetch, puis exploité par les fonctions de recherche, de filtrage et de pagination.

Les interactions utilisateur sont gérées avec les événements JavaScript. Lorsqu'un produit est ajouté au panier, les données du panier, son affichage et son montant total sont actualisés.

La sérialisation et la désérialisation avec `JSON.stringify()` et `JSON.parse()` permettent de conserver les informations dans LocalStorage après actualisation de la page.

L'interface est construite avec Tailwind CSS et adaptée aux différents formats d'écran.

## 7. Workflow Git

Le développement a été organisé autour de plusieurs branches :

- `main` : version principale du projet.
- `develop` : intégration des fonctionnalités.
- `api`, `storage`, `products` : données et catalogue.
- `cart` : gestion du panier.
- `dragdrop` : fonctionnalité Drag & Drop.
- `validation` : formulaire et vérifications Regex.

Les changements sont suivis à travers l'historique des commits Git.

## 8. Limites de cette version

Cette application est un projet pédagogique côté client.

Elle ne comprend pas de système de paiement réel, de traitement des commandes sur serveur ni d'envoi effectif d'emails.

La modification des quantités avec des boutons `+` et `-`, ainsi que le tableau de bord administrateur CRUD, ne font pas partie des fonctionnalités finalisées de cette version.

## 9. Gestion de projet et documentation

**Tableau Jira :** https://mmobarik.atlassian.net/jira/software/projects/AUC/boards/3

*L'accès au tableau peut nécessiter une connexion Atlassian et les autorisations appropriées.*

**Documentation technique :** [Documentation Sprint II](./Documentation.md)

**Code source :** https://github.com/AstaAT1/Auchan

---

*Projet individuel réalisé dans le cadre de la formation YouCode — 2026.*