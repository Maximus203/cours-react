// Exercice individuel 8401 : demande un indice ciblé si nécessaire ; explique ensuite le comportement que tu as écrit.
export default function App() {
  return (
    <main>
      <h1>Valide la demande au backend</h1>
      <p className="muted">React et l’IA</p>
      {/* TODO(8401) : afficher prêt, envoi, flux, terminé, erreur et annulation */}
      <button>Générer le résumé</button><p role="status">Prêt</p><pre></pre>
    </main>
  );
}
