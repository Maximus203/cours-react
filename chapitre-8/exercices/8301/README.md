# 8301 — Audite la réponse avant affichage

Projet de départ pour l’exercice du chapitre 8. L’énoncé détaillé est remis séparément au format Word.

## Démarrer

1. Dans ce dossier, exécute `npm ci`.
2. Lance `npm run dev` et ouvre l’adresse locale donnée par Vite.
3. Travaille dans les fichiers `src/` indiqués par les commentaires `TODO(8301)`.
4. Vérifie le résultat dans le navigateur et lis la console avant de terminer.

Le composant fourni contient volontairement une injection HTML via `dangerouslySetInnerHTML` et un champ sans label. Repère les deux défauts, décris un rendu textuel plus sûr et propose un test qui vérifie l’accessibilité du champ.

Le commentaire de travail invite à demander un indice ciblé ; il ne bloque pas techniquement un assistant. Tu restes responsable d’expliquer et de tester le code que tu écris.

## Réponse simulée

Le serveur local renvoie des événements fictifs pour tester les états de l’interface. Il n’appelle aucun fournisseur et ne requiert aucune clé API.
