import { useEffect, useState } from 'react';

function Profil({ utilisateurId }) {
  const [profil, setProfil] = useState(null);
  useEffect(() => {
    // TODO(4302) : appeler /data/profils.json et retrouver utilisateurId
  }, []);
  return <article>{profil ? <h2>{profil.nom}</h2> : <p role="status">Chargement…</p>}</article>;
}

export default function App() { return <main><h1>Recherche avec chargement et erreur</h1><Profil utilisateurId="awa" /></main>; }
