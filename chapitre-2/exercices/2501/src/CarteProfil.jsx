import { useState } from 'react';

export default function CarteProfil({ nom, estDeplie, onToggle }) {
  const [ouvert, setOuvert] = useState(false);

  return (
    <article className="carte">
      <h2>{nom}</h2>
      <button onClick={() => setOuvert(!ouvert)}>{ouvert ? 'Masquer' : 'Voir plus'}</button>
      {ouvert && <p>Présentation de {nom}.</p>}
    </article>
  );
}
