import { useState, useEffect } from 'react';
// Exercice individuel 4502 : demande un indice ciblé si nécessaire ; explique ensuite le comportement que tu as écrit.
export default function App() {
  return (
    <main>
      <h1>Conçois une expérience réseau robuste</h1>
      <p className="muted">Effets et données distantes</p>
      {/* TODO(4502) : annuler la recherche remplacée ; seul le dernier terme doit gagner */}
      <label htmlFor="q">Rechercher un profil</label><input id="q" />
      <p role="status">Les résultats apparaîtront ici.</p>
    </main>
  );
}

function Profil({ utilisateurId }) {
  return <article><h2>Profil : {utilisateurId}</h2><p>TODO(4502) : charger la donnée</p></article>;
}
