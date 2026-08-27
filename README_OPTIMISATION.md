# Guide d'Optimisation des Assets & Déploiement - Visio-Tech

Ce document fournit les consignes techniques et les commandes pour optimiser les performances, les fichiers médias et la sécurité de déploiement du projet web **Visio-Tech**.

---

## 1. Sécurisation du Build & Exclusions de Production

Afin d'éviter la fuite de documents confidentiels et d'alléger le package de production, les éléments suivants **DOIVENT être exclus du déploiement public** :

### Répertoires à exclure :
- `Dossiers/` (contient des contrats, règlements intérieurs, organigrammes et devis d'entreprise).
- `.idea/` & `.vscode/` (fichiers de configuration des éditeurs IDE).
- `.hintrc` (fichiers de linter locaux).

### Fichiers sources lourds à exclure dans `images/` :
- `images/Team of programmers working.eps` (5,8 Mo - Fichier vectoriel d'édition)
- `images/vision.eps` (600 Ko - Fichier vectoriel d'édition)
- `images/Team_three.ai` (200 Ko - Fichier Illustrator)
- `images/femme-service-client.ai` (134 Ko - Fichier Illustrator)
- `images/team work.ai` (430 Ko - Fichier Illustrator)
- `images/VTechY.zip` & `images/visiotech_dashboard.zip`

---

## 2. Optimisation des Images (Poids & Formats)

### Cas critique : `images/bureau.jpg` (15,8 Mo)
L'image `bureau.jpg` présente un poids excessif de **15,8 Mo**, ce qui dégrade lourdement le temps de chargement (LCP / Speed Index).

#### Option A : Conversion en ligne de commande via cwebp / ImageMagick
```bash
# Avec cwebp (Google WebP Tool) - Cible : < 200 Ko
cwebp -q 80 images/bureau.jpg -o images/bureau.webp

# Avec ImageMagick (JPG optimisé)
magick convert images/bureau.jpg -resize 1920x1080\> -quality 82 images/bureau_opt.jpg
```

#### Option B : Outils en ligne gratuits
- [Squoosh.app](https://squoosh.app/) (Sélectionner WebP / MozJPEG, redimensionner en 1920px max, qualité 80%).
- [TinyJPG / TinyPNG](https://tinyjpg.com/).

---

## 3. Renommage des Fichiers (Bonnes Pratiques Naming)

Pour garantir la compatibilité web et éviter les erreurs HTTP 404 sur les serveurs Linux/Nginx :
- Utiliser uniquement des lettres minuscules sans accent.
- Remplacer les espaces et les caractères spéciaux par des tirets (`-`).

### Table de renommage préconisée :
| Nom de fichier original | Nom de fichier optimisé préconisé |
| :--- | :--- |
| `Team of programmers working.eps` | `team-of-programmers-working.eps` |
| `Team_of_programmers.png` | `team-of-programmers.png` |
| `Team_of_programmers1.png` | `team-of-programmers-1.png` |
| `Team_three.png` | `team-three.png` |
| `femme-service-client.png` | `femme-service-client.png` |
| `user+computer.png` | `user-computer.png` |
| `ChatGPT Image Apr 29...png` | `chatgpt-banner.png` |

---

## 4. Minification des Fichiers CSS & JS

Pour la mise en production, il est recommandé de minifier les feuilles de style et scripts :

```bash
# Exemple avec esbuild / npx terser / npx clean-css-cli
npx clean-css-cli -o styles/main.min.css styles/main.css
npx clean-css-cli -o styles/style.min.css styles/style.css
npx terser javascript/index.js -o javascript/index.min.js --compress --mangle
```
