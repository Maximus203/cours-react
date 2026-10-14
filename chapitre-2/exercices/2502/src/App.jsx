import { useState } from 'react';
import CarteAtelier from './CarteAtelier.jsx';

export default function App() {
  const [reservations, setReservations] = useState(0);
  const capacite = 5;
  const restantes = capacite - reservations;

  function reserver() {
    // TODO(2502) : mise à jour fonctionnelle avec limite haute
  }

  function annuler() {
    // TODO(2502) : mise à jour fonctionnelle avec limite basse
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
