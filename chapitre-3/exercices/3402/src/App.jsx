import { useState } from 'react';
// Exercice individuel 3402 : demande un indice ciblé si nécessaire ; explique ensuite le comportement que tu as écrit.
export default function App() {
  return (
    <main>
      <h1>Une liste filtrable et accessible</h1>
      <p className="muted">Listes, clés et formulaires</p>
      {/* TODO(3402) : refuser les titres vides ou composés seulement d’espaces */}
      <form><label htmlFor="titre">Titre</label><input id="titre" /><button>Ajouter</button></form>
      <p role="alert" className="error" aria-live="polite"></p>
    </main>
  );
}
