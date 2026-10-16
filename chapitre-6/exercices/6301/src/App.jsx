import { useState } from 'react';
// Exercice individuel 6301 : demande un indice ciblé si nécessaire ; explique ensuite le comportement que tu as écrit.
export default function App() {
  return (
    <main>
      <h1>Partage une session de démonstration</h1>
      <p className="muted">État partagé : contexte et hooks personnalisés</p>
      {/* TODO(6301) : créer un contexte, son provider puis lire le thème dans un descendant */}
      <section className="panel"><h2>Préférences</h2><p>Thème : clair</p><button>Changer le thème</button></section>
    </main>
  );
}
