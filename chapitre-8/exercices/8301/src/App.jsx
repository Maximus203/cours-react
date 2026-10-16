import { useState } from 'react';
// Exercice individuel 8301 : demande un indice ciblé si nécessaire ; explique ensuite le comportement que tu as écrit.
export default function App() {
  return (
    <main>
      <h1>Audite la réponse avant affichage</h1>
      <p className="muted">React et l’IA</p>
      {/* TODO(8301) : appeler uniquement /api/assistant ; aucune clé ne doit être lue ici */}
      <form><label htmlFor="question">Question fictive</label><textarea id="question" /><button>Envoyer</button></form>
      <p role="status">Prêt</p><pre></pre>
    </main>
  );
}
