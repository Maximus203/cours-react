// Exercice individuel 7302 : demande un indice ciblé si nécessaire ; explique ensuite le comportement que tu as écrit.
export default function App() {
  return (
    <main>
      <h1>Teste recherche, vide et erreur</h1>
      <p className="muted">Qualité : tests et performance</p>
      {/* TODO(7302) : teste le parcours du formulaire avec userEvent */}
      <form><label htmlFor="q">Rechercher</label><input id="q" /><button>Rechercher</button></form><p>Résultat : atelier React</p>
    </main>
  );
}
