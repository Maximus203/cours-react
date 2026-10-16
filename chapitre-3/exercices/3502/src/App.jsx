import { useState } from 'react';
// Exercice individuel 3502 : demande un indice ciblé si nécessaire ; explique ensuite le comportement que tu as écrit.
export default function App() {
  return (
    <main>
      <h1>Conçois ton mini tableau de bord</h1>
      <p className="muted">Listes, clés et formulaires</p>
      {/* TODO(3502) : remplacer key={index} par une clé qui suit chaque tâche */}
      <ul>{['Awa', 'Moussa', 'Fatou'].map((nom, index) => <li key={index}><label><input type="checkbox" />{nom}</label><button>Retirer</button></li>)}</ul>
    </main>
  );
}
