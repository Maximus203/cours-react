import { useState, useEffect } from 'react';
// Exercice individuel 4402 : demande un indice ciblé si nécessaire ; explique ensuite le comportement que tu as écrit.
export default function App() {
  return (
    <main>
      <h1>Deux ressources, un écran honnête</h1>
      <p className="muted">Effets et données distantes</p>
      {/* TODO(4402) : vérifier response.ok avant de lire le JSON */}
      <p role="status">Demande prête</p>
      <button>Charger les données de démonstration</button>
    </main>
  );
}

function Profil({ utilisateurId }) {
  return <article><h2>Profil : {utilisateurId}</h2><p>TODO(4402) : charger la donnée</p></article>;
}
