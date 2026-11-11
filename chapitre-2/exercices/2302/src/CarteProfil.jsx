import { useState } from 'react';

export default function CarteProfil({ nom, metier }) {
  const [estDeplie, setEstDeplie] = useState(false);

  return (
    <article className="carte">
      <h2>{nom}</h2>
      <p>{metier}</p>
      <button onClick={() => { /* TODO(2302) : inverser l’état de cette carte */ }}>
        {estDeplie ? 'Masquer' : 'Voir plus'}
      </button>
      {/* TODO(2302) : afficher ici le détail seulement si estDeplie est vrai */}
    </article>
  );
}
