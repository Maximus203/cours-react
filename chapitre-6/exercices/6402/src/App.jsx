import { useState } from 'react';
// Exercice individuel 6402 : demande un indice ciblé si nécessaire ; explique ensuite le comportement que tu as écrit.
export default function App() {
  return (
    <main>
      <h1>Emballe une logique de favori</h1>
      <p className="muted">État partagé : contexte et hooks personnalisés</p>
      {/* TODO(6402) : fournir une session fictive par contexte, sans prop relais */}
      <header><p>Session : visiteur</p></header><section><h2>Profil</h2><p>Nom : visiteur</p></section>
    </main>
  );
}
