// Exercice individuel 7502 : demande un indice ciblé si nécessaire ; explique ensuite le comportement que tu as écrit.
export default function App() {
  return (
    <main>
      <h1>Audit qualité et performance</h1>
      <p className="muted">Qualité : tests et performance</p>
      {/* TODO(7502) : ajoute un test de comportement, profile la liste avant/après et consigne ton choix d’optimisation. */}
      <button>Ajouter au panier</button><label htmlFor="q">Rechercher</label><input id="q" />
      <ul>{Array.from({ length: 120 }, (_, index) => <li key={index}>Profil {index + 1}</li>)}</ul>
    </main>
  );
}
