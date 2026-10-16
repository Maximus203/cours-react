import { useState } from 'react';

export default function App() {
  const [panier, setPanier] = useState(0);
  const [email, setEmail] = useState('');
  const [etat, setEtat] = useState('En attente');

  function envoyer(event) {
    event.preventDefault();
    setEtat('Envoi…');
    window.setTimeout(() => setEtat('Réponse reçue'), 150);
  }

  return (
    <main>
      <h1>Fiabilise trois comportements clés</h1>
      <p className="muted">Qualité : tests et performance</p>
      {/* TODO(7501) : écris des tests d’interaction pour le panier, le formulaire et la réponse asynchrone. */}
      <button onClick={() => setPanier((nombre) => nombre + 1)}>Panier : {panier}</button>
      <form onSubmit={envoyer}>
        <label htmlFor="email">Adresse e-mail de démonstration</label>
        <input id="email" type="email" required value={email} onChange={(event) => setEmail(event.target.value)} />
        <button type="submit">Envoyer</button>
      </form>
      <p role="status">{etat}</p>
    </main>
  );
}
