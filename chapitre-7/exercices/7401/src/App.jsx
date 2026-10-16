// Exercice individuel 7401 : demande un indice ciblé si nécessaire ; explique ensuite le comportement que tu as écrit.
export default function App() {
  return (
    <main>
      <h1>Une suite de tests utile</h1>
      <p className="muted">Qualité : tests et performance</p>
      {/* TODO(7401) : tester l’arrivée asynchrone avec findBy... ou waitFor */}
      <p role="status">Recherche prête</p><button>Charger</button>
    </main>
  );
}
