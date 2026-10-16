import { useState } from 'react';

const ateliers = [
  'React : premiers composants',
  'JavaScript pour le navigateur',
  'Accessibilité des interfaces',
  'CSS : mise en page responsive',
  'Tests avec Testing Library',
  'React Router : routes imbriquées',
  'Formulaires contrôlés',
  'Données et chargement asynchrone',
];

const profils = Array.from({ length: 10 }, (_, groupe) =>
  ateliers.map((titre, index) => ({
    id: groupe * ateliers.length + index + 1,
    titre: `${titre} — groupe ${groupe + 1}`,
  })),
).flat();

function ListeProfils({ elements }) {
  return (
    <ul aria-label="Ateliers disponibles">
      {elements.map((atelier) => <li key={atelier.id}>{atelier.titre}</li>)}
    </ul>
  );
}

export default function App() {
  const [recherche, setRecherche] = useState('');
  const elementsVisibles = profils.filter((atelier) =>
    atelier.titre.toLowerCase().includes(recherche.toLowerCase()),
  );

  return (
    <main>
      <h1>Profile avant de mémoïser</h1>
      <p className="muted">Qualité : tests et performance</p>
      {/* TODO(7402) : profile ListeProfils avant toute optimisation ; ne mémoïse que si une mesure le justifie. */}
      <label htmlFor="recherche">Filtrer les ateliers</label>
      <input
        id="recherche"
        value={recherche}
        onChange={(event) => setRecherche(event.target.value)}
        placeholder="Ex. formulaires"
      />
      <p role="status">{elementsVisibles.length} atelier(s) affiché(s)</p>
      <ListeProfils elements={elementsVisibles} />
    </main>
  );
}
