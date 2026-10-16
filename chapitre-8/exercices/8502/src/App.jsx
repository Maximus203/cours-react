const proposition = `function Resultat({ html }) {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}

function Apercu() {
  const [texte, setTexte] = useState('');
  if (!texte) return null;
  return <Resultat html={texte} />;
}`;

export default function App() {
  return (
    <main>
      <h1>Audite une proposition de code IA</h1>
      <p className="muted">React et l’IA</p>
      <p>Cette proposition fictive contient plusieurs points à vérifier avant toute intégration.</p>
      {/* TODO(8502) : audite le rendu HTML, l’usage du hook, le comportement et l’accessibilité ; écris d’abord un test qui expose un défaut. */}
      <pre><code>{proposition}</code></pre>
    </main>
  );
}
