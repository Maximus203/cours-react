import { useState } from 'react';
// Exercice individuel 3401 : demande un indice ciblé si nécessaire ; explique ensuite le comportement que tu as écrit.
export default function App() {
  return (
    <main>
      <h1>Le tableau de bord de Coumba</h1>
      <p className="muted">Listes, clés et formulaires</p>
      {/* TODO(3401) : remplacer la clé d’index par l’identifiant stable */}
      <ul>{[{ id: 'brief', titre: 'Relire le brief' }, { id: 'maquette', titre: 'Préparer la maquette' }].map((tache, index) => <li key={index}>{tache.titre}</li>)}</ul>
    </main>
  );
}
