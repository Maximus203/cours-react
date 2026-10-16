import { useState } from 'react';

export default function App() {
  const [terme, setTerme] = useState('');
  const [etat, setEtat] = useState('initial');

  function rechercher(event) {
    event.preventDefault();
    const valeur = terme.trim().toLowerCase();
    if (valeur === 'erreur') return setEtat('erreur');
    if (!valeur || valeur === 'inconnu') return setEtat('vide');
    setEtat('succes');
  }

  return (
    <main>
      <h1>Teste recherche, vide et erreur</h1>
      <p className="muted">Qualité : tests et performance</p>
      <form onSubmit={rechercher}>
        <label htmlFor="q">Rechercher</label>
        <input id="q" value={terme} onChange={(event) => setTerme(event.target.value)} />
        <button type="submit">Rechercher</button>
      </form>
      {etat === 'succes' && <p role="status">Résultat : atelier React</p>}
      {etat === 'vide' && <p role="status">Aucun résultat.</p>}
      {etat === 'erreur' && <p role="alert">La recherche a échoué. Réessaie.</p>}
    </main>
  );
}
