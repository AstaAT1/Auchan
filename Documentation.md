# Documentation technique — Sprint II

## Projet AUCHAN & Co 2026

**Formation :** YouCode — Développement Web  
**Projet :** AUCHAN & Co 2026  
**Technologies :** HTML5, Tailwind CSS, JavaScript ES6+, Vite, Git et GitHub  
**Type :** Application e-commerce côté client

---

# 1. Introduction

Dans le cadre du Sprint II, nous avons réalisé une application e-commerce dynamique pour AUCHAN.

L'objectif de ce projet était de mettre en pratique les concepts fondamentaux et avancés de JavaScript, notamment la manipulation du DOM, les événements, les tableaux, les fonctions, Fetch API, LocalStorage, les modules ES6 et le Drag & Drop.

Le projet nous a également permis d'apprendre à structurer une application, organiser le travail avec Git et préparer un site pour le déploiement.

Cette documentation présente les principales notions étudiées et leur utilisation dans le projet.

# 2. HTML5 et structure de l'application

HTML5 permet de définir la structure et le contenu d'une page web.

Nous avons utilisé plusieurs éléments :

| Balise | Rôle |
|---|---|
| `header` | En-tête du site et navigation |
| `nav` | Organisation des liens de navigation |
| `main` | Contenu principal |
| `section` | Regroupement des contenus |
| `form` | Formulaire de contact |
| `input` | Saisie des informations |
| `textarea` | Saisie d'un message |
| `button` | Déclenchement d'une action |
| `img` | Affichage des images |
| `label` | Description d'un champ |

## Les attributs importants

**`id` :** identifiant unique permettant de sélectionner un élément avec JavaScript.

**`class` :** permet de partager des styles entre plusieurs éléments et de les sélectionner.

**`type` :** précise le type d'un champ ou d'un bouton.

**`required` :** indique qu'un champ est obligatoire.

**`alt` :** décrit une image, notamment pour l'accessibilité.

**`draggable="true"` :** permet de rendre un élément déplaçable par glisser-déposer.

### Application dans AUCHAN

Nous avons créé deux pages principales :

- `index.html` : catalogue, recherche, filtres et panier.
- `contact.html` : formulaire de contact avec validation des données.

Les deux pages sont reliées par la navigation.

# 3. CSS, Tailwind CSS et Responsive Design

## 3.1. Le rôle de CSS

CSS permet de contrôler l'apparence des éléments HTML : couleurs, espacements, dimensions, bordures et positionnement.

## 3.2. Tailwind CSS

Tailwind CSS est un framework CSS basé sur des classes utilitaires.

Au lieu de créer une classe CSS personnalisée pour chaque élément, nous appliquons directement des classes dans HTML.

Exemples :

| Classe | Utilité |
|---|---|
| `flex` | Active Flexbox |
| `flex-col` | Organise les éléments verticalement |
| `flex-wrap` | Autorise le retour à la ligne |
| `justify-between` | Répartit les éléments horizontalement |
| `items-center` | Centre les éléments sur l'axe secondaire |
| `gap-4` | Ajoute un espace entre les éléments |
| `p-4` | Ajoute un espacement intérieur |
| `rounded-xl` | Arrondit les bordures |
| `bg-red-600` | Applique une couleur de fond rouge |
| `hidden` | Cache un élément |

## 3.3. Flexbox

Flexbox permet de construire des interfaces flexibles et d'aligner facilement les éléments.

Dans AUCHAN, nous l'avons utilisé pour organiser les cartes produits, la navigation et les fenêtres modales.

Nous avons également créé deux modes d'affichage du catalogue :

**Mode Grille :** utilisation de `flex` avec `flex-wrap`.

**Mode Liste :** utilisation de `flex` avec `flex-col`.

Le changement se fait dynamiquement avec JavaScript.

## 3.4. Responsive Design

Le Responsive Design permet d'adapter l'interface aux différentes tailles d'écran.

Avec Tailwind, les préfixes `sm:`, `md:` et `lg:` permettent d'appliquer des styles selon la largeur de l'écran.

Exemple :

`w-[90%] md:w-[50%]`

Cela signifie que le formulaire occupe 90 % de la largeur sur les petits écrans, puis 50 % à partir du breakpoint `md`.

Cette approche est liée au principe **Mobile-First**, qui consiste à concevoir d'abord l'affichage mobile.

# 4. Fondamentaux de JavaScript

JavaScript permet de rendre une page interactive et dynamique.

Dans notre projet, nous l'avons utilisé pour manipuler les produits, gérer les événements, filtrer les données et mettre à jour le panier.

## 4.1. Variables : const et let

`const` permet de déclarer une variable dont la liaison ne peut pas être réaffectée.

`let` permet de déclarer une variable réaffectable.

Exemple :

```js
const limit = 8;
let currentPage = 1;
```

La limite reste fixe, tandis que le numéro de page change pendant la navigation.

Un tableau déclaré avec `const` peut néanmoins voir son contenu modifié.

## 4.2. Les objets

Un objet regroupe plusieurs informations sous forme de propriétés.

Exemple :

```js
const produit = {
    id: 1,
    nom: "Carottes",
    prix: 1.2,
    categorie: "Fruits et légumes"
};
```

Pour accéder à une propriété, on utilise la notation par point :

`produit.nom` ou `produit.prix`.

## 4.3. Les tableaux

Un tableau est une collection ordonnée de valeurs.

Dans AUCHAN, nous avons utilisé des tableaux pour représenter le catalogue et le panier.

Exemple :

```js
const panier = [];
```

Chaque élément du panier peut être un objet contenant les informations d'un produit et sa quantité.

## 4.4. Les conditions

Les structures `if`, `else if` et `else` permettent d'exécuter différentes opérations selon une condition.

Nous les avons utilisées pour :

- Vérifier si un produit existe déjà dans le panier.
- Vérifier si des produits sont enregistrés dans LocalStorage.
- Déterminer si un champ de formulaire est valide.
- Afficher des messages d'erreur ou de succès.

## 4.5. Les fonctions

Une fonction regroupe des instructions réutilisables.

Exemples du projet :

`searchProducts()` recherche les produits.

`pagination()` calcule les éléments d'une page.

`addToCart()` ajoute un produit au panier.

`calculateTotal()` calcule le montant total.

`updatePanier()` actualise l'interface du panier.

Les fonctions permettent de réduire la duplication de code et de séparer les responsabilités.

## 4.6. Les Arrow Functions

ES6 introduit une syntaxe plus concise pour écrire des fonctions.

Exemple :

```js
const addition = (a, b) => {
    return a + b;
};
```

Une fonction fléchée ne possède pas son propre `this`, contrairement à une fonction classique.

Dans AUCHAN, nous avons utilisé des fonctions classiques et des fonctions fléchées. La généralisation des Arrow Functions reste un axe d'amélioration par rapport aux exigences du brief.

# 5. Les méthodes avancées des tableaux

Les méthodes de tableaux permettent de traiter des données avec moins de code et une logique plus lisible.

## 5.1. forEach()

`forEach()` exécute une fonction pour chaque élément d'un tableau.

Exemple :

```js
panier.forEach(function(produit) {
    console.log(produit.nom);
});
```

Dans notre projet, nous l'avons utilisé pour parcourir les produits, créer des boutons et calculer le total du panier.

`forEach()` ne construit pas automatiquement un nouveau tableau.

## 5.2. map()

`map()` parcourt un tableau et retourne un nouveau tableau contenant les résultats d'une transformation.

Dans AUCHAN, nous l'avons utilisé pour générer les cartes HTML des produits.

Exemple :

```js
const noms = produits.map(function(produit) {
    return produit.nom;
});
```

La méthode retourne un tableau contenant les noms.

## 5.3. join()

`join()` transforme les éléments d'un tableau en une chaîne de caractères.

Exemple :

```js
["Carottes", "Lait"].join(" - ");
```

Résultat :

`Carottes - Lait`

Dans l'affichage dynamique, nous avons utilisé `map()` avec `join("")` pour construire le HTML des produits sans ajouter de virgules entre les cartes.

## 5.4. filter()

`filter()` crée un nouveau tableau contenant uniquement les éléments qui respectent une condition.

Exemple :

```js
const resultat = produits.filter(function(produit) {
    return produit.categorie === "Fruits et légumes";
});
```

Dans AUCHAN, cette méthode a été utilisée pour :

- Rechercher des produits.
- Filtrer par catégorie.
- Supprimer un produit du panier.

La méthode ne modifie pas directement le tableau d'origine.

## 5.5. find()

`find()` retourne le premier élément qui correspond à une condition.

Exemple :

```js
const existingProduct = panier.find(function(item) {
    return item.id === produit.id;
});
```

Dans notre panier, elle permet de vérifier si un produit a déjà été ajouté.

Si le produit existe, la méthode retourne son objet.

Sinon, elle retourne `undefined`.

## 5.6. some()

`some()` vérifie si au moins un élément respecte une condition.

Elle retourne un booléen : `true` ou `false`.

Exemple :

```js
const existe = panier.some(function(item) {
    return item.id === produit.id;
});
```

Cette méthode constitue une alternative lorsque nous voulons simplement savoir si un élément existe, sans récupérer directement son objet.

## 5.7. reduce()

`reduce()` permet de transformer un tableau en une valeur accumulée, par exemple une somme.

Exemple :

```js
const total = panier.reduce(function(somme, produit) {
    return somme + produit.prix * produit.quantite;
}, 0);
```

Le `0` représente la valeur initiale de l'accumulateur.

Dans la version travaillée du projet, nous avons finalement choisi `forEach()` pour calculer le total, car son fonctionnement était plus explicite.

`reduce()` reste une méthode importante étudiée pendant le Sprint II.

## 5.8. Différence entre find(), filter() et some()

| Méthode | Résultat |
|---|---|
| `find()` | Premier élément correspondant ou `undefined` |
| `filter()` | Nouveau tableau d'éléments correspondants |
| `some()` | `true` ou `false` |
| `map()` | Nouveau tableau transformé |
| `forEach()` | Parcourt les éléments, sans créer de tableau résultat |
| `reduce()` | Valeur accumulée |

# 6. Manipulation du DOM

## 6.1. Définition

Le DOM (*Document Object Model*) représente la page HTML sous forme d'une structure d'objets manipulables avec JavaScript.

Grâce au DOM, nous pouvons modifier une page sans la recharger.

## 6.2. Sélection des éléments

Nous avons principalement utilisé :

**`document.querySelector()`**

Sélectionne le premier élément correspondant à un sélecteur CSS.

**`document.querySelectorAll()`**

Sélectionne tous les éléments correspondants et retourne une NodeList.

Exemples :

```js
document.querySelector("#produits");
document.querySelectorAll(".add-to-cart");
```

Nous avons aussi étudié la différence entre `NodeList` et `HTMLCollection`.

Une NodeList obtenue avec `querySelectorAll()` est statique : elle ne se met pas automatiquement à jour si de nouveaux éléments sont ajoutés.

## 6.3. Modifier le contenu

**`textContent`** permet d'ajouter ou de modifier du texte.

**`innerHTML`** permet d'insérer du contenu HTML.

Dans AUCHAN, `innerHTML` nous a servi à générer les cartes produits et les lignes du panier.

Pour afficher un message d'erreur, nous avons utilisé `textContent`.

Une bonne pratique consiste à privilégier `textContent` pour les textes simples et à éviter d'injecter directement des contenus non fiables dans `innerHTML`.

## 6.4. Modifier les classes CSS

`classList.add()` ajoute une classe.

`classList.remove()` supprime une classe.

Ces méthodes ont été utilisées pour basculer entre les vues Liste et Grille et modifier le style des boutons actifs.

## 6.5. Création d'éléments

Nous avons également utilisé :

- `document.createElement()` pour créer un élément HTML.
- `append()` pour l'insérer dans la page.
- `className` pour définir ses classes.
- `textContent` pour définir son contenu.

Ces opérations ont notamment été utilisées pour construire les boutons de pagination et de catégories.

# 7. Les événements JavaScript

## 7.1. addEventListener()

Cette méthode permet de réagir à une action utilisateur.

Exemple :

```js
button.addEventListener("click", function() {
    console.log("Bouton cliqué");
});
```

Les événements utilisés dans AUCHAN comprennent :

| Événement | Utilisation |
|---|---|
| `click` | Boutons, filtres, pagination et panier |
| `input` | Recherche instantanée |
| `submit` | Validation du formulaire |
| `dragstart` | Début du glisser-déposer |
| `dragover` | Passage au-dessus de la zone du panier |
| `drop` | Dépôt du produit |

## 7.2. L'objet event

Lorsqu'un événement se produit, JavaScript fournit un objet contenant les informations associées.

Dans le formulaire, nous avons utilisé :

```js
event.preventDefault();
```

Cette méthode empêche l'action par défaut du navigateur, notamment le rechargement de la page lors de la soumission.

## 7.3. Les fonctions Callback

Une Callback est une fonction transmise à une autre fonction pour être exécutée au moment approprié.

Dans AUCHAN, `ui.js` reçoit une Callback permettant de signaler à `main.js` qu'un utilisateur souhaite ajouter un produit.

Cette approche sépare deux responsabilités :

- `ui.js` : afficher les éléments et détecter les interactions.
- `main.js` : coordonner les fonctions métier.

## 7.4. Événements et éléments dynamiques

Lorsque nous utilisons `innerHTML`, les anciens éléments HTML sont remplacés.

Les événements attachés aux anciens boutons disparaissent également.

C'est pour cette raison que nous avons relié les boutons aux événements après chaque nouvel affichage du catalogue.

# 8. Fetch API et programmation asynchrone

## 8.1. Définition

Fetch API permet d'effectuer des requêtes HTTP depuis JavaScript.

Dans AUCHAN, nous avons utilisé `fetch()` pour récupérer les produits depuis `data.json`.

## 8.2. Les Promises

`fetch()` retourne une Promise.

Une Promise représente le résultat futur d'une opération asynchrone.

Elle peut être :

- `pending` : opération en cours.
- `fulfilled` : opération réussie.
- `rejected` : opération échouée.

## 8.3. Utilisation de then()

La méthode `.then()` permet d'exécuter une fonction lorsque la Promise est résolue.

Exemple simplifié :

```js
fetch("./data/data.json")
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data);
    });
```

**Première étape :** Fetch récupère une réponse HTTP.

**Deuxième étape :** `response.json()` lit le corps de la réponse et le transforme en valeur JavaScript.

**Troisième étape :** les données sont utilisées pour afficher le catalogue.

`response.json()` retourne également une Promise.

## 8.4. Pourquoi l'asynchrone ?

Le navigateur peut continuer à fonctionner pendant qu'il attend une réponse.

Cela évite de bloquer toute l'interface pendant le chargement des données.

## 8.5. Gestion des erreurs

Une application plus robuste doit également gérer les erreurs de chargement.

Les points à vérifier sont notamment :

- La réponse HTTP est-elle correcte ?
- Le fichier demandé existe-t-il ?
- Les données sont-elles du JSON valide ?
- Que doit afficher l'application si le chargement échoue ?

Ces vérifications sont importantes, même si la gestion complète des erreurs reste une amélioration possible de cette version.

# 9. JSON et LocalStorage

## 9.1. JSON

JSON (*JavaScript Object Notation*) est un format texte utilisé pour représenter des données structurées.

Dans le projet, `data.json` contient les informations du catalogue.

Un produit comporte notamment un identifiant, un nom, une catégorie, un prix et une image.

## 9.2. LocalStorage

LocalStorage permet de stocker des informations dans le navigateur.

Les données restent disponibles après un rafraîchissement ou une fermeture du navigateur, sauf suppression du stockage.

## 9.3. Sérialisation

`JSON.stringify()` transforme un objet ou un tableau JavaScript en chaîne JSON.

Exemple :

```js
localStorage.setItem("auchanCart", JSON.stringify(panier));
```

## 9.4. Désérialisation

`JSON.parse()` transforme une chaîne JSON en valeur JavaScript.

Exemple :

```js
const saved = localStorage.getItem("auchanCart");
```

Si `saved` contient une chaîne JSON valide, nous pouvons utiliser `JSON.parse(saved)` pour retrouver le tableau.

Il faut gérer le cas où `getItem()` retourne `null`, et prévoir une protection si le contenu sauvegardé est invalide.

## 9.5. Utilisation dans AUCHAN

Nous avons utilisé LocalStorage pour deux catégories de données :

**Catalogue :** conservation des produits après leur chargement initial.

**Panier :** conservation des articles et quantités après actualisation.

Lorsqu'un produit est ajouté ou supprimé, l'application sauvegarde le panier mis à jour.

Au chargement de la page, elle restaure ensuite les données enregistrées.

## 9.6. Limites

LocalStorage est propre au navigateur et au site.

Ce n'est pas une base de données serveur et les informations peuvent être supprimées par l'utilisateur.

Il ne faut pas y stocker de secrets ou de données sensibles.

# 10. Recherche, catégories et pagination

## 10.1. Recherche instantanée

La recherche utilise l'événement `input`.

Lorsque l'utilisateur écrit un nom de produit, nous filtrons le catalogue à partir de la valeur saisie.

La combinaison `toLowerCase()` et `includes()` permet une recherche partielle sans tenir compte des majuscules et minuscules.

Exemple :

`"Carottes".toLowerCase().includes("car")`

Résultat : `true`.

## 10.2. Filtrage par catégorie

Nous avons créé une fonction `filterByCategory()`.

Si la catégorie sélectionnée est `All`, elle conserve l'ensemble des produits.

Sinon, elle utilise `filter()` pour sélectionner uniquement les produits de la catégorie demandée.

## 10.3. Pagination

La pagination limite le nombre d'éléments affichés à 8 produits par page.

Nous avons utilisé `slice()` pour extraire une partie du tableau.

La logique repose sur deux valeurs :

**Début :**

`(page - 1) * limit`

**Fin :**

`début + limit`

Pour la deuxième page, avec une limite de 8, nous affichons les éléments d'indices 8 à 15.

## 10.4. Math.ceil()

Pour calculer le nombre de pages, nous avons utilisé :

```js
Math.ceil(products.length / limit);
```

`Math.ceil()` arrondit à l'entier supérieur.

Exemple : 23 produits et 8 produits par page donnent 3 pages.

## 10.5. Combinaison des fonctionnalités

Dans `renderCatalogue()`, les opérations suivent un ordre logique :

1. Récupérer la recherche actuelle.
2. Filtrer les produits par nom.
3. Appliquer la catégorie sélectionnée.
4. Calculer le nombre de pages.
5. Extraire les produits de la page.
6. Actualiser l'interface et les boutons de pagination.

Nous réinitialisons `currentPage` à 1 lorsque la recherche ou la catégorie change afin d'éviter d'afficher une page devenue inexistante.

# 11. Gestion du panier

## 11.1. Ajouter un produit

La fonction `addToCart()` reçoit le panier et le produit sélectionné.

Elle utilise `find()` pour chercher un produit ayant le même identifiant.

Deux cas sont possibles.

**Produit déjà présent :** nous augmentons sa quantité.

**Nouveau produit :** nous ajoutons un objet avec une quantité initiale de 1.

Cette logique évite de créer plusieurs lignes pour le même produit.

## 11.2. Supprimer un produit

La fonction `removeFromCart()` utilise `filter()` pour construire un nouveau tableau sans le produit sélectionné.

Le tableau du panier est ensuite remplacé par le résultat.

Il s'agit d'une suppression de ligne complète, et non d'une diminution de quantité.

## 11.3. Calculer le total

Pour chaque produit, nous calculons :

**Sous-total = Prix × Quantité**

Puis nous additionnons tous les sous-totaux.

Dans notre implémentation, nous avons utilisé `forEach()` et un accumulateur initialisé à zéro.

Exemple :

| Produit | Prix | Quantité | Sous-total |
|---|---:|---:|---:|
| Carottes | 1,20 $ | 2 | 2,40 $ |
| Lait | 3,00 $ | 1 | 3,00 $ |
| Fromage | 5,00 $ | 2 | 10,00 $ |
| **Total** | | | **15,40 $** |

Le résultat est formaté avec `toFixed(2)` afin d'afficher deux chiffres après la virgule décimale.

## 11.4. Affichage du panier

Le panier s'affiche dans une fenêtre modale.

Nous avons utilisé :

- Une zone pour afficher les articles.
- Un bouton pour fermer la fenêtre.
- Un bouton pour supprimer chaque article.
- Un affichage du montant total.

La fonction `updatePanier()` centralise l'actualisation de l'interface, notamment après l'ajout et la suppression d'un article.

## 11.5. Persistance

La fonction `saveCart()` sauvegarde le panier dans LocalStorage.

La fonction `getCart()` récupère les données sauvegardées.

Cette architecture permet de retrouver le panier après un rafraîchissement.

# 12. Drag & Drop

## 12.1. Définition

Le Drag & Drop est une interaction qui permet de déplacer un élément avec la souris vers une zone de destination.

Dans AUCHAN, un utilisateur peut glisser une carte produit vers le bouton du panier.

## 12.2. draggable

L'attribut HTML `draggable="true"` rend une carte déplaçable.

Les cartes sont identifiées avec la classe `product-card`.

## 12.3. dragstart

L'événement `dragstart` se déclenche au début du déplacement.

Nous identifions la carte sélectionnée et utilisons son index dans le tableau des produits affichés.

## 12.4. dataTransfer

L'objet `dataTransfer` permet de transporter une information pendant le glisser-déposer.

`setData()` enregistre une valeur au début du déplacement.

`getData()` permet de récupérer cette valeur lors du dépôt.

Nous avons utilisé le format `"text/plain"`.

Comme la valeur récupérée est une chaîne de caractères, nous la convertissons en nombre avant de l'utiliser comme index.

## 12.5. dragover

L'événement `dragover` se produit lorsque l'élément déplacé passe au-dessus de la zone du panier.

Nous avons utilisé `event.preventDefault()` pour autoriser le dépôt.

## 12.6. drop

L'événement `drop` se déclenche lorsque le produit est déposé sur le panier.

Nous récupérons son index, identifions l'objet correspondant dans les produits visibles et appelons la fonction chargée de l'ajout au panier.

## 12.7. Éviter les événements dupliqués

Le catalogue est réaffiché lors des recherches et changements de page.

Si nous ajoutons systématiquement un nouvel événement `drop` sur le même bouton, plusieurs événements peuvent s'accumuler.

Pour éviter ce problème, nous avons utilisé les propriétés `ondrop` et `ondragover`, qui remplacent les gestionnaires précédents.

## 12.8. Relation avec la pagination

Nous utilisons le tableau `pagi`, contenant les produits actuellement affichés.

Ainsi, l'index de la carte correspond à l'index du produit visible, même après une recherche ou un changement de page.

# 13. Formulaire et expressions régulières

## 13.1. Le formulaire

Nous avons créé une page `contact.html` contenant quatre champs :

Nom complet, Email, Téléphone et Message.

L'objectif est de vérifier les données saisies avant de confirmer la validation.

## 13.2. required

L'attribut `required` indique qu'un champ doit être rempli.

Il fournit une première vérification directement par le navigateur.

Nous l'avons conservé en complément de JavaScript.

## 13.3. Regex

Une expression régulière est un modèle permettant de vérifier la structure d'un texte.

Dans JavaScript, nous utilisons la méthode `.test()` pour obtenir `true` ou `false`.

## 13.4. Validation du nom

Expression utilisée :

```js
/^[a-zA-ZÀ-ÿ\s'-]{2,}$/
```

Elle accepte au moins deux caractères parmi les lettres du groupe défini, les espaces, les apostrophes et les tirets.

Cette version reste une validation simplifiée : elle ne garantit pas à elle seule la présence de deux véritables lettres.

## 13.5. Validation de l'email

Expression utilisée :

```js
/^[^\s@]+@[^\s@]+\.[^\s@]+$/
```

Elle vérifie une structure générale comportant du texte, le symbole `@`, un nom de domaine, un point et une extension.

Il s'agit d'une vérification de format, pas d'une preuve que l'adresse email existe réellement.

## 13.6. Validation du téléphone

Expression utilisée :

```js
/^0[567]\d{8}$/
```

Elle vérifie un format de 10 chiffres commençant par `05`, `06` ou `07`.

Elle ne confirme pas que le numéro est réellement attribué ou actif.

## 13.7. Validation du message

Expression utilisée :

```js
/^[\s\S]{10,}$/
```

Elle exige au moins 10 caractères.

Nous utilisons également `.trim()` avant le contrôle afin de supprimer les espaces au début et à la fin.

## 13.8. Vérification lors du Submit

L'événement `submit` permet de déclencher la validation lorsque l'utilisateur clique sur « Envoyer le message ».

Nous avons utilisé :

- `preventDefault()` pour éviter le rechargement.
- `trim()` pour nettoyer les valeurs.
- `.test()` pour vérifier les Regex.
- `textContent` pour afficher les erreurs.
- `&&` pour vérifier que toutes les conditions sont vraies.

## 13.9. Messages d'erreur et de succès

Si un champ est invalide, nous affichons un message sous le champ concerné.

Si tous les champs sont valides, nous affichons une confirmation.

Nous utilisons `contactForm.reset()` uniquement après une validation réussie.

Cette méthode remet les champs du formulaire dans leur état initial.

**Important :** la validation côté client ne remplace pas une validation serveur dans une application réelle. Notre formulaire ne transmet pas réellement les messages.

# 14. Architecture modulaire ES6

Nous avons séparé les responsabilités du projet entre plusieurs fichiers JavaScript.

| Module | Responsabilité |
|---|---|
| `api.js` | Chargement des produits |
| `products.js` | Recherche, filtres et pagination |
| `cart.js` | Logique métier du panier |
| `storage.js` | LocalStorage |
| `dragDrop.js` | Événements Drag & Drop |
| `ui.js` | Manipulation et affichage du DOM |
| `validation.js` | Contrôle des champs du formulaire |
| `main.js` | Initialisation et coordination |

## import et export

`export` permet de rendre une fonction accessible depuis un autre module.

`import` permet de l'utiliser.

Cette organisation améliore la lisibilité, la maintenance, les tests et la réutilisation du code.

Elle évite également de concentrer toute la logique dans un seul fichier JavaScript.

# 15. Vite et environnement de développement

## 15.1. Pourquoi utiliser Vite ?

Vite est un outil permettant de lancer un serveur de développement et de produire une version optimisée du projet.

Il facilite le travail avec les modules JavaScript et les outils CSS.

## 15.2. Développement et production

**`npm run dev` :** démarre le serveur de développement.

**`npm run build` :** produit la version destinée à la production.

**`npm run preview` :** permet de tester localement le résultat du build.

## 15.3. Le dossier dist

Le dossier `dist/` contient les fichiers générés pour la production.

Il ne faut pas supposer que tous les fichiers du projet seront automatiquement copiés dans ce dossier.

## 15.4. Multi-Page Build

Notre application comporte deux pages HTML.

Nous avons configuré Vite pour inclure `index.html` et `contact.html` dans le build de production.

Sans cette configuration, la page Contact pouvait fonctionner en développement mais ne pas être présente dans la version déployée.

## 15.5. Le dossier public

Le dossier `public/` permet de conserver des fichiers statiques devant être accessibles sans transformation particulière.

Dans notre cas, il contient notamment le fichier JSON et les images du catalogue.

Son contenu est copié vers la sortie de production.

## 15.6. Déploiement sur Vercel

Nous avons utilisé Vercel pour publier le projet.

Lors du déploiement, Vercel construit l'application et rend accessibles les fichiers produits.

Les problèmes rencontrés nous ont permis de comprendre l'importance de vérifier les chemins, le dossier `dist/`, les ressources statiques et la différence entre développement et production.

# 16. Git et GitHub

## 16.1. Pourquoi utiliser Git ?

Git est un système de gestion de versions.

Il permet de suivre les modifications, retrouver l'historique et travailler avec plusieurs branches.

## 16.2. Les principales commandes

| Commande | Rôle |
|---|---|
| `git status` | Vérifier l'état des fichiers |
| `git branch` | Afficher les branches |
| `git switch` | Changer de branche |
| `git add` | Préparer les fichiers pour un commit |
| `git commit` | Enregistrer une version |
| `git push` | Envoyer les commits vers GitHub |
| `git pull` | Récupérer les modifications distantes |
| `git merge` | Fusionner les changements entre branches |
| `git stash` | Mettre temporairement des modifications de côté |

## 16.3. Organisation des branches

Le projet utilise notamment :

**main :** branche principale.

**develop :** branche d'intégration.

**Branches fonctionnelles :** `api`, `products`, `cart`, `dragdrop`, `validation`, etc.

Nous avons développé les fonctionnalités séparément avant de les intégrer dans `develop`, puis dans `main`.

## 16.4. Merge et conflits

Un Merge permet de réunir le travail de plusieurs branches.

Un conflit apparaît lorsque Git ne peut pas résoudre automatiquement certaines modifications.

Nous avons notamment rencontré et résolu des conflits sur des fichiers JavaScript.

Cela nous a appris à vérifier les différences et à sélectionner les modifications à conserver avant de terminer le Merge.

## 16.5. Conventional Commits

La convention Conventional Commits propose une structure explicite pour les messages de commit.

Exemples :

- `feat:` nouvelle fonctionnalité.
- `fix:` correction d'un problème.
- `docs:` documentation.
- `style:` modifications de présentation.

Certains commits du projet utilisent cette convention ; son application systématique reste une amélioration possible.

## 16.6. Pull Requests

Une Pull Request permet de proposer une intégration, relire les changements et discuter des modifications avant un Merge.

Le brief recommande une Pull Request vers `develop` pour chaque fonctionnalité.

Dans le travail réalisé, plusieurs intégrations ont été effectuées directement en local avec `git merge`.

# 17. Tests fonctionnels

Les tests manuels permettent de vérifier les comportements attendus de l'application.

Voici les scénarios principaux à contrôler.

| Fonctionnalité | Scénario attendu |
|---|---|
| Catalogue | Les produits et leurs images apparaissent |
| Recherche | Le catalogue se filtre pendant la saisie |
| Catégories | Seuls les produits correspondants apparaissent |
| Pagination | L'affichage respecte la limite de 8 produits |
| Panier | Un produit peut être ajouté |
| Doublons | Le même produit augmente sa quantité |
| Suppression | Le produit sélectionné disparaît |
| Total | Le montant se recalcule après modification |
| LocalStorage | Le panier reste disponible après Refresh |
| Drag & Drop | Le produit déposé est ajouté une seule fois |
| Liste / Grille | Le mode d'affichage change |
| Validation | Les données invalides sont refusées |
| Contact | Les deux pages sont accessibles après déploiement |

Ces scénarios constituent une liste de vérifications. Ils ne représentent pas une suite de tests automatisés.

# 18. Difficultés rencontrées et solutions

## 18.1. Callbacks

**Difficulté :** comprendre comment une fonction déclarée dans `main.js` peut être appelée depuis `ui.js`.

**Solution :** transmettre cette fonction comme paramètre et l'exécuter lors du clic utilisateur.

## 18.2. Pagination et affichage dynamique

**Difficulté :** les boutons des produits sont recréés après chaque recherche ou changement de page.

**Solution :** rattacher leurs événements après chaque génération des cartes.

## 18.3. Gestion des doublons

**Difficulté :** éviter plusieurs lignes pour un même produit dans le panier.

**Solution :** utiliser `find()` pour identifier un produit déjà existant et augmenter sa quantité.

## 18.4. Répétition des événements Drag & Drop

**Difficulté :** plusieurs événements `drop` pouvaient s'accumuler lors des réaffichages.

**Solution :** utiliser `ondrop` et `ondragover` pour remplacer les gestionnaires précédents.

## 18.5. Validation des champs

**Difficulté :** distinguer les vérifications natives HTML et les vérifications JavaScript.

**Solution :** conserver `required` et `type="email"` pour les contrôles natifs, et utiliser Regex pour les règles supplémentaires.

## 18.6. Formulaire réinitialisé au mauvais moment

**Difficulté :** les champs étaient effacés alors que certaines données étaient invalides.

**Solution :** placer `reset()` uniquement dans le bloc correspondant à la validation réussie.

## 18.7. Déploiement Vite

**Difficulté :** le site fonctionnait localement, mais la page Contact et les données des produits n'étaient pas correctement accessibles en production.

**Solution :** configurer le build multi-pages, utiliser le dossier `public/` et tester la version avec `npm run preview`.

# 19. Limites et pistes d'amélioration

Certaines fonctionnalités ont été étudiées dans le brief mais n'ont pas été entièrement finalisées dans cette version.

Il reste notamment possible d'améliorer :

- La modification manuelle des quantités dans le panier avec des boutons `+` et `-`.
- La gestion des erreurs et états de chargement des requêtes Fetch.
- L'accessibilité et les retours visuels de l'interface.
- La validation et la sécurisation côté serveur.
- Les tests automatisés.
- L'utilisation plus systématique des Arrow Functions et des autres fonctionnalités ES6+.
- Le workflow de Pull Requests.

Les fonctionnalités supplémentaires proposées par le brief comprennent le tableau de bord administrateur CRUD, la tarification dynamique selon les tailles, la pagination personnalisable et l'utilisation de RandomUser API.

Les bonus proposés comprennent la génération de devis PDF et le Dark Mode.

Ces éléments sont mentionnés comme perspectives, et non comme fonctionnalités déjà réalisées.

# 20. Conclusion

Le projet AUCHAN & Co 2026 a permis de mettre en pratique les principaux concepts du Sprint II dans une application concrète.

Nous avons appris à organiser un projet JavaScript modulaire, récupérer et transformer des données, manipuler le DOM, gérer les événements, construire un panier dynamique et conserver son état avec LocalStorage.

Nous avons également découvert les interactions Drag & Drop, la validation des formulaires avec Regex et les étapes nécessaires pour construire et déployer une application avec Vite.

Au-delà du développement, ce projet nous a permis de progresser dans la résolution de problèmes, la compréhension du fonctionnement de JavaScript et l'utilisation de Git dans un workflow de développement.

---

**Projet :** AUCHAN & Co 2026  
**Formation :** YouCode — Sprint II  
**Dépôt GitHub :** https://github.com/AstaAT1/Auchan  
**Application :** https://auchan-co.vercel.app/

