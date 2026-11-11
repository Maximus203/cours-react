import CarteProfil from './CarteProfil.jsx';
import { useState } from 'react';

export default function App() {

  const [awaDepliee, setAwaDepliee] = useState(false);
  const [moussaDeplie, setMoussaDeplie] = useState(false);
  return (
    <main>
      <h1>Équipe du studio</h1>
      <p className="info">TODO profils ouverts sur 2</p>
      <div className="grille">
      <CarteProfil
      nom="Awa Ndiaye"
      estDeplie={awaDepliee}
      onToggle={() => setAwaDepliee(!awaDepliee)}
      />

      <CarteProfil
      nom="Moussa Diallo"
      estDeplie={moussaDeplie}
      onToggle={() => setMoussaDeplie(!moussaDeplie)}
      />
      </div>
    </main>
  );
}
