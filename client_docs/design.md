# Design System - Bon Coeur Multiservices

## 📋 Table des matières

1. [Couleurs](#couleurs)
2. [Typographie](#typographie)
3. [Espacements](#espacements)
4. [Bordures et Rayons](#bordures-et-rayons)
5. [Ombres](#ombres)
6. [Composants UI](#composants-ui)
7. [Effets et Animations](#effets-et-animations)
8. [Layouts](#layouts)
9. [Patterns de Design](#patterns-de-design)

---

## 🎨 Couleurs

### Palette Principale

Les couleurs de l'entreprise sont inspirées du logo **Bon Cœur Multiservices** : **Bleu-violet foncé**, **Bleu-cyan vibrant**, **Bleu moyen**, **Blanc** et **Gris**.

#### Bleu-violet foncé (Primary)
- **Primary** (`#4B3687`) : Couleur principale pour les actions et accents
- **Primary Hover** (`#5A4596`) : État hover des boutons primaires
- **HSL** : `255 45% 38%` : Valeur pour les variables CSS

**Usage** :
- Boutons d'action principaux
- Bordures au focus des inputs
- Accents visuels principaux
- Variantes outline et ghost des boutons

#### Bleu-cyan vibrant (Accent)
- **Accent** (`#00AFE0`) : Couleur d'accentuation et de mise en évidence
- **HSL** : `195 100% 44%` : Valeur pour les variables CSS

**Usage** :
- Liens au hover
- Badges de sécurité
- Indicateurs de statut
- Accents visuels secondaires

#### Bleu moyen (Secondary/Info)
- **Secondary** (`#007ABF`) : Couleur secondaire et informations
- **HSL** : `200 100% 37%` : Valeur pour les variables CSS

**Usage** :
- Boutons secondaires
- Dégradés de fond
- Hover des inputs
- Éléments informatifs

#### Gris (Neutral)
- **Gris 800** (`gray-800` / `#1F2937`) : Textes principaux
- **Gris 700** (`gray-700` / `#374151`) : Labels et textes secondaires
- **Gris 600** (`gray-600` / `#4B5563`) : Textes tertiaires et liens
- **Gris 400** (`gray-400` / `#9CA3AF`) : Placeholders
- **Gris 300** (`gray-300` / `#D1D5DB`) : Bordures par défaut
- **Gris 200** (`gray-200` / `#E5E7EB`) : Fond des boutons secondaires
- **Gris 100** (`gray-100` / `#F3F4F6`) : Fonds légers

**Usage** :
- Textes et typographie
- Bordures
- Fonds neutres
- États désactivés

#### Blanc
- **Blanc** (`white` / `#FFFFFF`) : Fonds de cartes, contraste sur dégradés

**Usage** :
- Fonds de cartes et formulaires
- Textes sur fonds colorés
- Éléments glassmorphism

### Couleurs Sémantiques

#### Success (Vert)
- `green-500` : Actions réussies, validation

#### Warning (Orange)
- `orange-500` / `#F4A261` : Avertissements, actions importantes

#### Error (Rouge)
- `red-600` : Erreurs, actions destructrices
- `red-700` : Hover sur boutons destructifs

#### Info (Bleu moyen)
- `#007ABF` : Informations, éléments informatifs (utilise la couleur secondary)

### Variables CSS (HSL)

Les couleurs sont également définies en variables CSS HSL pour une utilisation cohérente :

```css
--primary: 255 45% 38%;        /* #4B3687 - Bleu-violet foncé */
--primary-foreground: 0 0% 100%; /* Blanc */

--secondary: 200 100% 37%;      /* #007ABF - Bleu moyen */
--secondary-foreground: 0 0% 100%; /* Blanc */

--accent: 195 100% 44%;         /* #00AFE0 - Bleu-cyan vibrant */
--accent-foreground: 0 0% 100%; /* Blanc */

--ring: 255 45% 38%;            /* #4B3687 - Pour les focus rings */
```

**Usage dans Tailwind** : `bg-[hsl(var(--primary))]` ou via les classes personnalisées.

---

## 📝 Typographie

### Police de caractères
- **Famille principale** : `"Inter", system-ui, sans-serif`
- **Fallback** : `system-ui, Avenir, Helvetica, Arial, sans-serif`

### Hiérarchie

#### Titres
- **H1** : `text-4xl font-bold` (36px, bold)
  - Usage : Titres principaux de page, noms d'entreprise
  - Exemple : "Bon Coeur Multiservices"

- **H2** : `text-3xl font-bold` (30px, bold)
  - Usage : Titres de sections, formulaires
  - Exemple : "Connexion"

- **H3** : `text-2xl font-bold` (24px, bold)
  - Usage : Sous-titres de sections

#### Corps de texte
- **Texte principal** : `text-base` (16px, regular)
  - Usage : Paragraphes, descriptions

- **Texte secondaire** : `text-sm` (14px, regular)
  - Usage : Labels, textes d'aide, sous-titres

- **Texte petit** : `text-xs` (12px, regular)
  - Usage : Badges, métadonnées, textes légaux

#### Poids de police
- **Bold** (`font-bold`) : Titres, labels importants
- **Semibold** (`font-semibold`) : Labels de formulaires, textes importants
- **Medium** (`font-medium`) : Sous-titres, textes secondaires
- **Regular** (`font-normal`) : Corps de texte par défaut

#### Couleurs de texte
- **Texte principal** : `text-gray-800` ou `text-white` (selon le fond)
- **Texte secondaire** : `text-gray-700` ou `text-white/90`
- **Texte tertiaire** : `text-gray-600` ou `text-white/80`
- **Placeholders** : `text-gray-400` ou `text-white/60`

---

## 📏 Espacements

### Système d'espacement (Tailwind)
- `gap-2` : 8px - Espacement minimal entre éléments liés
- `gap-4` : 16px - Espacement standard entre éléments
- `gap-5` : 20px - Espacement entre champs de formulaire
- `gap-6` : 24px - Espacement entre sections de formulaire
- `gap-8` : 32px - Espacement entre groupes d'éléments

### Padding
- **Petit** : `p-2` (8px) - Badges, petits éléments
- **Moyen** : `p-4` (16px) - Inputs, boutons moyens
- **Grand** : `p-8` (32px) - Cartes, conteneurs
- **Très grand** : `p-10` (40px) - Formulaires, panneaux
- **Écran** : `p-12` (48px) - Pages pleine largeur

### Margin
- **Vertical** : `space-y-3` (12px), `space-y-8` (32px)
- **Horizontal** : `space-x-2` (8px), `space-x-4` (16px)

---

## 🔲 Bordures et Rayons

### Rayons de bordure (Border Radius)
- **Petit** : `rounded-lg` (8px) - Inputs, boutons
- **Moyen** : `rounded-xl` (12px) - Cartes, formulaires
- **Grand** : `rounded-2xl` (16px) - Panneaux, conteneurs importants
- **Plein** : `rounded-full` - Badges, indicateurs circulaires

### Bordures
- **Épaisseur standard** : `border-2` (2px)
- **Couleur par défaut** : `border-gray-300`
- **Couleur hover** : `border-[#007ABF]` (bleu moyen)
- **Couleur focus** : `border-[#4B3687]` (bleu-violet foncé, couleur primaire)

---

## 🌑 Ombres

### Niveaux d'ombre
- **Léger** : `shadow-sm` - Éléments subtils
- **Standard** : `shadow-lg` - Cartes, formulaires
- **Élevé** : `shadow-xl` - Modales, panneaux importants
- **Ring (Focus)** : `focus:ring-2 focus:ring-[#4B3687]/20` - Indicateur de focus (bleu-violet foncé)

### Ombres colorées
- `shadow-[#00AFE0]/50` - Ombres pour indicateurs bleu-cyan
- `shadow-[#4B3687]/20` - Ring de focus bleu-violet foncé

---

## 🧩 Composants UI

### Boutons

#### Variantes
1. **Primary** (Bleu-violet foncé)
   - Fond : `bg-[#4B3687]`
   - Texte : `text-white`
   - Hover : `hover:bg-[#5A4596]`
   - Focus : `focus:ring-[#4B3687]`

2. **Secondary** (Bleu moyen)
   - Fond : `bg-[#007ABF]`
   - Texte : `text-white`
   - Hover : `hover:bg-[#0089D1]`
   - Focus : `focus:ring-[#007ABF]`

3. **Outline** (Bleu-violet foncé)
   - Bordure : `border-2 border-[#4B3687]`
   - Texte : `text-[#4B3687]`
   - Hover : `hover:bg-[#4B3687] hover:text-white`

4. **Ghost** (Bleu-violet foncé)
   - Texte : `text-[#4B3687]`
   - Hover : `hover:bg-[#4B3687]/10`

5. **Destructive** (Rouge)
   - Fond : `bg-red-600`
   - Texte : `text-white`
   - Hover : `hover:bg-red-700`

#### Tailles
- **Small** : `px-3 py-2 text-sm`
- **Medium** : `px-5 py-3 text-base` (défaut)
- **Large** : `px-6 py-4 text-lg`

#### États
- **Disabled** : `disabled:opacity-50 disabled:cursor-not-allowed`
- **Loading** : Affiche un spinner avec texte "Chargement..."

### Inputs

#### Style de base
```css
w-full px-4 py-3 
border-2 border-gray-300 rounded-lg
focus:outline-none focus:border-[#4B3687] focus:ring-2 focus:ring-[#4B3687]/20
transition-all duration-200
hover:border-[#007ABF]
placeholder:text-gray-400
```

#### États
- **Par défaut** : Bordure grise (`border-gray-300`)
- **Hover** : Bordure bleu moyen (`hover:border-[#007ABF]`)
- **Focus** : Bordure bleu-violet foncé (`focus:border-[#4B3687]`) + ring bleu-violet (`focus:ring-[#4B3687]/20`)
- **Placeholder** : Texte gris clair (`placeholder:text-gray-400`)

### Labels
- Style : `text-sm font-semibold text-gray-700`
- Espacement : `gap-2` avec l'input

### Cartes (Cards)

#### Style standard
```css
bg-white rounded-xl shadow-lg p-10
flex flex-col gap-6
```

#### Variantes
- **Simple** : Fond blanc, ombre légère
- **Glassmorphism** : `bg-white/20 backdrop-blur-md` avec bordure transparente
- **Avec bordure** : `border border-gray-200`

### Badges

#### Badge de sécurité
```css
px-4 py-2 
bg-white/20 backdrop-blur-sm rounded-full 
border border-white/30
```

#### Indicateur de statut
- Point animé : `w-2.5 h-2.5 bg-[#00AFE0] rounded-full animate-pulse`
- Ombre : `shadow-lg shadow-[#00AFE0]/50`

---

## ✨ Effets et Animations

### Transitions
- **Standard** : `transition-all duration-200`
- **Couleurs** : `transition-colors duration-200`
- **Tous les effets** : `transition-all duration-200`

### Animations
- **Pulse** : `animate-pulse` - Pour indicateurs de statut
- **Spin** : `animate-spin` - Pour loaders

### Effets visuels

#### Glassmorphism
```css
bg-white/20 backdrop-blur-md
border border-white/30
```
- Utilisé pour les éléments sur fonds colorés/dégradés
- Opacité : 20% (`/20`)
- Backdrop blur : `backdrop-blur-md`

#### Dégradés
- **Branding Panel** : `bg-gradient-to-br from-[#4B3687] via-[#007ABF] to-[#00AFE0]`
  - Du bleu-violet foncé → bleu moyen → bleu-cyan vibrant
- Direction : `to-br` (top-left to bottom-right)

#### Overlays
- Pattern overlay : `opacity-10` pour motifs subtils
- Gradient overlay : Utilisé pour adoucir les couleurs

---

## 📐 Layouts

### Structure de page

#### Layout pleine hauteur
```css
h-screen flex overflow-hidden
```

#### Colonnes
- **Flex 1** : `flex-1` - Colonnes égales
- **Centrage vertical** : `flex items-center justify-center`
- **Espacement** : `p-8 lg:p-12` (responsive)

#### Responsive
- **Mobile** : `hidden lg:flex` - Masquer sur mobile, afficher sur desktop
- **Breakpoints Tailwind** :
  - `sm` : 640px
  - `md` : 768px
  - `lg` : 1024px
  - `xl` : 1280px

### Conteneurs
- **Max width** : `max-w-md` (448px) pour formulaires
- **Full width** : `w-full` pour éléments flexibles

---

## 🎯 Patterns de Design

### Page de connexion

#### Structure
- **Layout split-screen** : 50/50 sur desktop
- **Colonne gauche** : Branding panel avec dégradé
- **Colonne droite** : Formulaire de connexion sur fond blanc

#### Branding Panel
- Fond dégradé bleu-violet foncé → bleu moyen → bleu-cyan vibrant
- Contenu centré verticalement et horizontalement
- Éléments glassmorphism
- Texte blanc pour contraste
- Badge de sécurité avec indicateur bleu-cyan

#### Formulaire
- Carte blanche avec ombre
- Centré dans la colonne
- Espacement généreux
- Inputs avec focus bleu-violet foncé et hover bleu moyen

### Hiérarchie visuelle

1. **Niveau 1** : Titres principaux (H1, H2)
2. **Niveau 2** : Labels, sous-titres
3. **Niveau 3** : Corps de texte, descriptions
4. **Niveau 4** : Métadonnées, textes secondaires

### Accessibilité

#### Focus
- Tous les éléments interactifs doivent avoir un état focus visible
- Utiliser `focus:ring-2` avec la couleur primaire
- `focus:outline-none` pour supprimer le outline par défaut

#### Contraste
- Texte sur fond clair : `text-gray-800`
- Texte sur fond coloré : `text-white` avec opacité si nécessaire
- Ratio de contraste minimum : 4.5:1 pour le texte normal

#### États
- **Hover** : Toujours visible et distinct
- **Active** : Feedback visuel immédiat
- **Disabled** : Opacité réduite + curseur non autorisé

---

## 📚 Exemples de Code

### Bouton Primary
```tsx
<Button variant="primary" size="md">
  Connexion
</Button>
```

### Input avec Label
```tsx
<div className="flex flex-col gap-2">
  <label htmlFor="email" className="text-sm font-semibold text-gray-700">
    Email
  </label>
  <input 
    type="email"
    id="email"
    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg 
               focus:outline-none focus:border-[#4B3687] focus:ring-2 focus:ring-[#4B3687]/20
               transition-all duration-200
               hover:border-[#007ABF]
               placeholder:text-gray-400"
  />
</div>
```

### Carte avec Glassmorphism
```tsx
<div className="bg-white/20 backdrop-blur-md rounded-2xl p-6 border border-white/30">
  {/* Contenu */}
</div>
```

### Badge de statut
```tsx
<div className="flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full">
  <div className="w-2.5 h-2.5 bg-[#00AFE0] rounded-full animate-pulse shadow-lg shadow-[#00AFE0]/50" />
  <span className="text-white/90 text-xs font-semibold">Statut</span>
</div>
```

---

## 🔄 Évolution du Design System

Ce document doit être mis à jour lorsque :
- De nouveaux composants sont créés
- Les couleurs de l'entreprise changent
- De nouveaux patterns de design sont introduits
- Des améliorations d'accessibilité sont apportées

---

**Dernière mise à jour** : Janvier 2026
**Version** : 2.0.0