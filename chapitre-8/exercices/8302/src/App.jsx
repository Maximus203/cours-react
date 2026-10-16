// Exercice individuel 8302 : demande un indice ciblé si nécessaire ; explique ensuite le comportement que tu as écrit.
export default function App() {
  return (
    <main>
      <h1>Un assistant sans clé navigateur</h1>
      <p className="muted">React et l’IA</p>
      {/* TODO(8302) : envoyer une demande au relais simulé et gérer erreur/limite */}
      <form><label htmlFor="question">Question</label><textarea id="question" maxLength={400} /><button>Demander</button></form><p role="alert"></p>
    </main>
  );
}
