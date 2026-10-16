// Exercice individuel 7402 : demande un indice ciblé si nécessaire ; explique ensuite le comportement que tu as écrit.
export default function App() {
  return (
    <main>
      <h1>Profile avant de mémoïser</h1>
      <p className="muted">Qualité : tests et performance</p>
      {/* TODO(7402) : tester résultat, absence et erreur avec des rôles accessibles */}
      <label htmlFor="q">Rechercher</label><input id="q" /><ul></ul><p role="alert"></p>
    </main>
  );
}
