import { useState, useEffect } from 'react';
// Exercice individuel 4301 : demande un indice ciblé si nécessaire ; explique ensuite le comportement que tu as écrit.
export default function App() {
  return (
    <main>
      <h1>Le tableau de bord attend ses données</h1>
      <p className="muted">Effets et données distantes</p>
      {/* TODO(4301) : charger /data/taches.json avec useEffect et distinguer chargement, vide, succès et erreur */}
      <p role="status">Chargement des tâches…</p>
      <ul></ul>
    </main>
  );
}
