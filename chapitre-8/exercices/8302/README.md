# 8302 — Un assistant sans clé navigateur

Projet de départ pour l’exercice du chapitre 8. L’énoncé détaillé est remis séparément au format Word.

## Démarrer

1. Dans ce dossier, exécute `npm ci`.
2. Lance `npm run dev` et ouvre l’adresse locale donnée par Vite.
3. Travaille dans les fichiers `src/` indiqués par les commentaires `TODO(8302)`.
4. Vérifie le résultat dans le navigateur et lis la console avant de terminer.

Le navigateur appelle uniquement `/api/assistant`. Le serveur de démonstration renvoie un texte fictif en morceaux ; aucune vraie clé ni compte fournisseur n’est utilisé.

Le commentaire de travail invite à demander un indice ciblé ; il ne bloque pas techniquement un assistant. Tu restes responsable d’expliquer et de tester le code que tu écris.

## Réponse simulée

Le serveur local renvoie des événements fictifs pour tester les états de l’interface. Il n’appelle aucun fournisseur et ne requiert aucune clé API.
