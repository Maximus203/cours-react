// Exercice individuel 8502 : demande un indice ciblé si nécessaire ; explique ensuite le comportement que tu as écrit.
export default function App() {
  return (
    <main>
      <h1>Audite une proposition de code IA</h1>
      <p className="muted">React et l’IA</p>
      {/* TODO(8502) : vérifier l’entrée côté client et serveur ; ne jamais exposer de secret */}
      <form><label htmlFor="source">Texte fictif</label><textarea id="source" maxLength={500} /><button>Résumer</button></form><p role="alert"></p>
    </main>
  );
}
