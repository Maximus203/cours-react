// Exercice individuel 8501 : demande un indice ciblé si nécessaire ; explique ensuite le comportement que tu as écrit.
export default function App() {
  return (
    <main>
      <h1>Intègre un assistant simulé</h1>
      <p className="muted">React et l’IA</p>
      {/* TODO(8501) : réalise le parcours complet avec le relais local : saisie, envoi, affichage des morceaux, annulation et nouvelle tentative. */}
      <label htmlFor="q">Question de démonstration</label><textarea id="q" /><button type="button">Envoyer</button><button type="button">Annuler</button><div className="response" aria-live="polite"></div>
    </main>
  );
}
