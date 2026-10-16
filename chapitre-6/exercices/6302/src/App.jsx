import { useState } from 'react';
// Exercice individuel 6302 : demande un indice ciblé si nécessaire ; explique ensuite le comportement que tu as écrit.
export default function App() {
  return (
    <main>
      <h1>Un état global, pas une nouvelle base</h1>
      <p className="muted">État partagé : contexte et hooks personnalisés</p>
      {/* TODO(6302) : créer useToggle et l’utiliser dans deux cartes indépendantes */}
      <div className="list"><article><h2>Awa</h2><button>Afficher le détail</button></article><article><h2>Moussa</h2><button>Afficher le détail</button></article></div>
    </main>
  );
}
