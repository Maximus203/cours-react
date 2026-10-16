import { useState } from 'react';

// Exercice individuel 7401 : demande un indice ciblé si nécessaire ; explique ensuite le comportement que tu as écrit.
export default function App() {
  const [compteur, setCompteur] = useState(0);
  const [nom, setNom] = useState('');
  const [etat, setEtat] = useState('Prêt');

  function charger() {
    setEtat('Chargement…');
    window.setTimeout(() => setEtat('Données chargées'), 150);
  }

  return (
    <main>
      <h1>Une suite de tests utile</h1>
      <p className="muted">Qualité : tests et performance</p>
      {/* TODO(7401) : teste le clic, la validation du formulaire et l’état asynchrone avec findBy... ou waitFor. */}
      <button onClick={() => setCompteur((valeur) => valeur + 1)}>Clics : {compteur}</button>
      <form onSubmit={(event) => { event.preventDefault(); setEtat(nom.trim() ? `Bonjour ${nom.trim()}` : 'Saisis un nom.'); }}>
        <label htmlFor="nom">Nom</label><input id="nom" value={nom} onChange={(event) => setNom(event.target.value)} />
        <button type="submit">Valider</button>
      </form>
      <button onClick={charger}>Charger</button>
      <p role="status">{etat}</p>
    </main>
  );
}
