import { useState } from 'react';
// Exercice individuel 6402 : demande un indice ciblé si nécessaire ; explique ensuite le comportement que tu as écrit.
export default function App() {
  return (
    <main>
      <h1>Emballe une logique de favori</h1>
      <p className="muted">État partagé : contexte et hooks personnalisés</p>
      {/* TODO(6402) : crée useFavori pour deux cartes ; chaque appel doit conserver son propre état. */}
      <div className="list"><article><h2>Atelier React</h2><button>Ajouter aux favoris</button></article><article><h2>Atelier CSS</h2><button>Ajouter aux favoris</button></article></div>
    </main>
  );
}
