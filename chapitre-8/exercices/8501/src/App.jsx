// Exercice individuel 8501 : demande un indice ciblé si nécessaire ; explique ensuite le comportement que tu as écrit.
export default function App() {
  return (
    <main>
      <h1>Intègre un assistant simulé</h1>
      <p className="muted">React et l’IA</p>
      {/* TODO(8501) : rendre la réponse comme texte ; auditer label, limite et erreur */}
      <label htmlFor="q">Question</label><textarea id="q" /><button>Envoyer</button><div className="response"></div>
    </main>
  );
}
