import { useState } from 'react';
// Exercice individuel 6401 : demande un indice ciblé si nécessaire ; explique ensuite le comportement que tu as écrit.
export default function App() {
  return (
    <main>
      <h1>Réduis les props relais</h1>
      <p className="muted">État partagé : contexte et hooks personnalisés</p>
      {/* TODO(6401) : déplacer l’appel du hook hors de la condition */}
      <p>Le composant reçoit afficherCompteur={false}.</p>
      <button>Basculer le compteur</button>
    </main>
  );
}
