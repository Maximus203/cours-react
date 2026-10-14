import { useState } from 'react';

export default function App() {
  const [metier, setMetier] = useState('Développeuse front-end');
  const [metierMajuscule, setMetierMajuscule] = useState('DÉVELOPPEUSE FRONT-END');

  function changerMetier() {
    setMetier('Designer d’interface');
  }

  return (
    <main>
      <h1>Profil professionnel</h1>
      <p>Métier : {metier}</p>
      <p className="info">Étiquette : {metierMajuscule}</p>
      <button onClick={changerMetier}>Changer le métier</button>
    </main>
  );
}
