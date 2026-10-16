import { useState } from 'react';
// Exercice individuel 3302 : demande un indice ciblé si nécessaire ; explique ensuite le comportement que tu as écrit.
export default function App() {
  return (
    <main>
      <h1>Corrige la case qui change de ligne</h1>
      <p className="muted">Listes, clés et formulaires</p>
      {/* TODO(3302) : contrôler ce champ avec un état et valider après trim() */}
      <form><label htmlFor="titre">Titre de la tâche</label><input id="titre" value="" onChange={() => {}} /><button>Ajouter</button></form>
      <p className="error" role="alert">L’erreur apparaîtra ici.</p>
    </main>
  );
}
