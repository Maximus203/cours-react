// Exercice individuel 7402 : demande un indice ciblé si nécessaire ; explique ensuite le comportement que tu as écrit.
export default function App() {
  return (
    <main>
      <h1>Profile avant de mémoïser</h1>
      <p className="muted">Qualité : tests et performance</p>
      {/* TODO(7402) : profile ce rendu de liste avant toute mémoïsation et ne l’ajoute que si la mesure le justifie. */}
      <label htmlFor="q">Rechercher</label><input id="q" /><ul></ul><p role="alert"></p>
    </main>
  );
}
