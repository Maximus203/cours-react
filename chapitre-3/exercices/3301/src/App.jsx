import { useState } from 'react';
// Exercice individuel 3301 : demande un indice ciblé si nécessaire ; explique ensuite le comportement que tu as écrit.
export default function App() {
  return (
    <main>
      <h1>Filtre sans perdre les tâches</h1>
      <p className="muted">Listes, clés et formulaires</p>
      {/* TODO(3301) : ajouter la liste avec map, une key stable, ajout et suppression immuables */}
      <p>Deux tâches de démonstration sont prêtes.</p>
      <ul><li>Relire le brief</li><li>Préparer la maquette</li></ul>
      <label htmlFor="nouvelle">Nouvelle tâche</label><input id="nouvelle" />
      <button>Ajouter</button>
    </main>
  );
}
