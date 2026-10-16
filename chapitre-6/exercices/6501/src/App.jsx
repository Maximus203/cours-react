import { useState } from 'react';
// Exercice individuel 6501 : demande un indice ciblé si nécessaire ; explique ensuite le comportement que tu as écrit.
export default function App() {
  return (
    <main>
      <h1>Partage les réglages du tableau de bord</h1>
      <p className="muted">État partagé : contexte et hooks personnalisés</p>
      {/* TODO(6501) : remplacer la chaîne de props relais par un provider de langue */}
      <p>Langue choisie : français</p><button>Passer en anglais</button>
    </main>
  );
}
