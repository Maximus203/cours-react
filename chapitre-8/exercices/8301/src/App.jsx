// Exercice individuel 8301 : auditer cet exemple volontairement vulnérable.
export default function App() {
  const reponseFictive = '<strong>Réponse simulée</strong>';
  return (
    <main>
      <h1>Audite la réponse avant affichage</h1>
      <p className="muted">React et l’IA</p>
      <p>Deux défauts sont volontairement présents dans cet exemple. Identifie-les avant de proposer un correctif.</p>
      {/* TODO(8301) : remplace le rendu HTML dangereux par du texte React et associe un label au champ. */}
      <form>
        <textarea placeholder="Votre question" />
        <button type="button">Analyser</button>
      </form>
      <section className="panel" aria-label="Réponse simulée">
        <h2>Réponse reçue</h2>
        <div dangerouslySetInnerHTML={{ __html: reponseFictive }} />
      </section>
    </main>
  );
}
