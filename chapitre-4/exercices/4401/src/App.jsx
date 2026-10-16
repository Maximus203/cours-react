import { useState, useEffect } from 'react';
// Exercice individuel 4401 : demande un indice ciblé si nécessaire ; explique ensuite le comportement que tu as écrit.
export default function App() {
  return (
    <main>
      <h1>Fiabilise la fiche distante</h1>
      <p className="muted">Effets et données distantes</p>
      {/* TODO(4401) : passer le signal de AbortController au fetch puis annuler au nettoyage */}
      <Profil utilisateurId="moussa" />
    </main>
  );
}

function Profil({ utilisateurId }) {
  return <article><h2>Profil : {utilisateurId}</h2><p>TODO(4401) : charger la donnée</p></article>;
}
