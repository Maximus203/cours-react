import { useState } from 'react';
// Exercice individuel 6502 : demande un indice ciblé si nécessaire ; explique ensuite le comportement que tu as écrit.
export default function App() {
  return (
    <main>
      <h1>Choisis entre props, contexte et hook</h1>
      <p className="muted">État partagé : contexte et hooks personnalisés</p>
      {/* TODO(6502) : compare props, état local, contexte et hook dans DECISIONS.md, puis implémente le choix minimal. */}
      <div className="list"><article><h2>Atelier React</h2><button>Ajouter aux favoris</button></article><article><h2>Atelier CSS</h2><button>Ajouter aux favoris</button></article></div>
    </main>
  );
}
