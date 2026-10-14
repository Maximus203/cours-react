import { useState } from 'react';

export default function App() {
  const [places, setPlaces] = useState(7);

  function ajouterUnePlace() {
    // TODO(2402) : augmenter sans dépasser 8
  }

  function retirerUnePlace() {
    // TODO(2402) : diminuer sans passer sous 0
  }

  return (
    <main>
      <h1>Atelier React — inscriptions</h1>
      <p className="info">Places disponibles : {places} / 8</p>
      <p>{/* TODO(2402) : calculer et afficher le statut */}</p>
      <button onClick={retirerUnePlace}>Retirer une place</button>
      <button onClick={ajouterUnePlace}>Ajouter une place</button>
    </main>
  );
}
