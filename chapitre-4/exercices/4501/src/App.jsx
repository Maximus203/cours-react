import { useState, useEffect } from 'react';
// Exercice individuel 4501 : demande un indice ciblé si nécessaire ; explique ensuite le comportement que tu as écrit.
export default function App() {
  return (
    <main>
      <h1>Tableau de bord connecté</h1>
      <p className="muted">Effets et données distantes</p>
      {/* TODO(4501) : chaque ressource gère séparément son chargement et son erreur */}
      <section><h2>Tâches</h2><p role="status">Chargement…</p></section>
      <section><h2>Équipe</h2><p role="status">Chargement…</p></section>
    </main>
  );
}

function Profil({ utilisateurId }) {
  return <article><h2>Profil : {utilisateurId}</h2><p>TODO(4501) : charger la donnée</p></article>;
}
