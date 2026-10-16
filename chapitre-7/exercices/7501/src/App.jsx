// Exercice individuel 7501 : demande un indice ciblé si nécessaire ; explique ensuite le comportement que tu as écrit.
export default function App() {
  return (
    <main>
      <h1>Fiabilise trois comportements clés</h1>
      <p className="muted">Qualité : tests et performance</p>
      {/* TODO(7501) : profile d’abord ce rendu ; n’ajoute pas de mémoïsation sans mesure */}
      <ul>{Array.from({ length: 120 }, (_, i) => <li key={i}>Profil {i + 1}</li>)}</ul>
    </main>
  );
}
