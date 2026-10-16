// Exercice individuel 8401 : demande un indice ciblé si nécessaire ; explique ensuite le comportement que tu as écrit.
export default function App() {
  return (
    <main>
      <h1>Valide la demande au backend</h1>
      <p className="muted">React et l’IA</p>
      {/* TODO(8401) : envoyer la demande au middleware local, y refuser une entrée vide ou trop longue et afficher une erreur compréhensible. */}
      <form><label htmlFor="texte">Texte à résumer</label><textarea id="texte" /><button type="submit">Générer le résumé</button></form>
      <p role="status">Prêt</p><pre></pre>
    </main>
  );
}
