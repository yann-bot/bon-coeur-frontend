# Rapport : Authentification Bon Cœur

## État actuel

### ✅ Implémenté

| Élément | Description |
|--------|-------------|
| **Formulaire de connexion** | Email + mot de passe, validation Zod, affichage des erreurs par champ |
| **Client Better Auth** | `authClient` configuré avec `createAuthClient` (better-auth/react) |
| **Fonction login** | Appel à `authClient.signIn.email`, gestion des erreurs |
| **Redirection post-connexion** | `useNavigate` vers `/dashboard`, support du paramètre `?redirect=` |
| **Routes** | `/` (login), `/dashboard`, fallback vers `/` |
| **Validation** | Email requis + format valide, mot de passe min 6 caractères |

---

## À faire pour une auth opérationnelle

### 1. Configuration

- [ ] **Corriger `.env`** : `VITE_API_URL` doit être l’URL de base du backend (`http://localhost:3000`), pas l’endpoint complet. Better Auth ajoute `/api/auth/*` automatiquement.
  ```
  VITE_API_URL=http://localhost:3000
  ```
- [ ] **Backend Better Auth** : Vérifier que le serveur expose `/api/auth/*` avec `emailAndPassword: { enabled: true }`
- [ ] **CORS** : Si client et backend sont sur des domaines/ports différents, configurer CORS et `credentials: "include"` (Better Auth s’en occupe si bien configuré)

### 2. Protection des routes

- [ ] **Composant ProtectedRoute** : Vérifier la session avant d’afficher une route (ex. Dashboard). Si non connecté → redirection vers `/` avec `?redirect=/dashboard`
- [ ] **useSession** : Utiliser `authClient.useSession()` pour récupérer l’utilisateur connecté et afficher/masquer du contenu
- [ ] **Route login pour utilisateurs connectés** : Si déjà connecté sur `/`, rediriger vers `/dashboard`

### 3. Déconnexion

- [ ] **Bouton déconnexion** : Sur le Dashboard (et dans le layout), appel à `authClient.signOut()`
- [ ] **Redirection après déconnexion** : Retour vers la page de login (`/`)

### 4. Gestion des erreurs API

- [ ] **Affichage des erreurs serveur** : Afficher dans le formulaire les erreurs non liées aux champs (ex. "Identifiants incorrects", "Compte désactivé") via un state `generalError`
- [ ] **Messages traduits** : Mapper les codes d’erreur Better Auth vers des messages en français

### 5. Mot de passe oublié

- [ ] **Lien fonctionnel** : Remplacer le `href="#"` par une page ou un flux de réinitialisation
- [ ] **Page reset password** : Appel à `authClient.requestPasswordReset` puis à `authClient.resetPassword` avec le token
- [ ] **Backend** : Configurer `sendResetPassword` dans Better Auth

### 6. Inscription (optionnel)

- [ ] **Page /signup** : Formulaire avec email, mot de passe, confirmation
- [ ] **Appel** : `authClient.signUp.email({ name, email, password })`
- [ ] **Validation Zod** : Schéma dédié pour l’inscription

### 7. UX et robustesse

- [ ] **État de chargement global** : Afficher un loader pendant la vérification de session au démarrage
- [ ] **Gestion session expirée** : Détecter une 401 et rediriger vers la page de login
- [ ] **Persistance** : Vérifier que les cookies de session sont bien envoyés (`credentials: "include"`)

---

## Structure des fichiers

```
src/features/auth/
├── components/
│   ├── loginForm.tsx    # Formulaire de connexion
│   ├── input.tsx
│   ├── button.tsx
│   └── brandingPanel.tsx
├── pages/
│   └── auth.tsx         # Page de login (layout)
├── utils/
│   ├── auth.models.ts   # Types (loginInput)
│   ├── authClient.ts    # Client Better Auth
│   └── login.ts         # Fonction login()
└── rapport.md           # Ce document
```

---

## Priorités recommandées

1. Corriger `VITE_API_URL` dans `.env`
2. Protéger la route `/dashboard` avec une vérification de session
3. Ajouter un bouton de déconnexion dans le Dashboard
4. Afficher les erreurs API (identifiants incorrects, etc.) dans le formulaire
5. Connecter le lien « Mot de passe oublié » si la fonctionnalité est utilisée
