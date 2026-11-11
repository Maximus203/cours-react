import { useState } from 'react';
import CarteAtelier from './CarteAtelier.jsx';

export default function App() {
  const [reservations, setReservations] = useState(0);
  const capacite = 5;
  const restantes = capacite - reservations;

  function reserver() {
    setReservations(previous => {
    if (previous >= capacite) {
      return previous;
    }

    return previous + 1;
  });
  }

  function annuler() {
    setReservations(previous => {
    if (previous <= 0) {
      return previous;
    }

    return previous - 1;
  });
  }

  return (
    <main>
      <h1>Ateliers du samedi</h1>
      <p className="info">Places restantes : {restantes} / {capacite}</p>
      <div className="grille">
        <CarteAtelier nom="Découvrir React" onReserver={reserver} onAnnuler={annuler} />
        <CarteAtelier nom="Construire une interface" onReserver={reserver} onAnnuler={annuler} />
      </div>
    </main>
  );
}
