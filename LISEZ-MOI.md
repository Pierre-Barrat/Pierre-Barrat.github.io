# Portfolio BTS SIO SISR

Site statique (HTML / CSS / JS), sans outil de build. Il fonctionne tel quel sur GitHub Pages.

## Structure

```
index.html                    page d'accueil (à propos, compétences, projets, veille, contact)
projects.html                 liste des projets
projet-dashboard-hyperv.html  page détaillée du projet dashboard
style.css                     styles (couleurs modifiables en haut, dans :root)
script.js                     menu mobile, année du footer, lien actif
assets/cv/                    mettez ici votre CV en PDF (cv.pdf)
assets/img/                   photo, captures d'écran
```

## Compléter le site

Tout ce qui est à remplir apparaît en **orange souligné en pointillés** (classe `todo`).
Recherchez `À COMPLÉTER` ou `[` dans les fichiers HTML avec la fonction « rechercher » de votre éditeur.
Quand vous remplacez un texte, supprimez aussi `class="todo"` pour retirer le style orange.

Ajouter un projet :
1. Copiez `projet-dashboard-hyperv.html` en `projet-nom.html` et modifiez le contenu.
2. Copiez le bloc `<article class="card project-card">` dans `index.html` et `projects.html`, puis changez le lien.

## Publier sur GitHub Pages

1. Créez un compte sur github.com, puis **New repository**.
2. Nommez le dépôt **`votre-pseudo.github.io`** (exactement, avec votre pseudo GitHub). Visibilité : Public. Créez-le.
3. Envoyez les fichiers :
   - Sans ligne de commande : sur la page du dépôt, **Add file → Upload files**, glissez TOUT le contenu du dossier (pas le dossier lui-même), puis **Commit changes**.
   - Avec Git :
     ```
     git init
     git add .
     git commit -m "Premier commit"
     git branch -M main
     git remote add origin https://github.com/votre-pseudo/votre-pseudo.github.io.git
     git push -u origin main
     ```
4. Dans le dépôt : **Settings → Pages**. Sous *Build and deployment*, choisissez *Deploy from a branch*, branche **main**, dossier **/ (root)**, puis Save.
5. Après 1 à 2 minutes, le site est en ligne sur `https://votre-pseudo.github.io`.

Pour mettre à jour : modifiez un fichier (ou ré-uploadez-le) et faites un commit ; le site se met à jour tout seul.

Attention : un dépôt public est visible de tous. Ne mettez dans le site ni mot de passe, ni adresse IP, ni nom de serveur interne, ni capture d'écran montrant des informations de votre entreprise ou de son infrastructure.
