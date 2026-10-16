import { useState } from 'react';
// Exercice individuel 3501 : demande un indice ciblé si nécessaire ; explique ensuite le comportement que tu as écrit.
export default function App() {
  return (
    <main>
      <h1>Prépare la livraison de tâches</h1>
      <p className="muted">Listes, clés et formulaires</p>
      {/* TODO(3501) : calculer la liste filtrée pendant le rendu, sans second useState */}
      <label htmlFor="recherche">Rechercher une tâche</label><input id="recherche" />
      <ul><li>Relire le brief</li><li>Préparer la maquette</li><li>Tester le formulaire</li></ul>
    </main>
  );
}
