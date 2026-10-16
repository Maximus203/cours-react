import { useState } from 'react';

function Salutation({ langue }) {
  return <p>{langue === 'fr' ? 'Bonjour' : 'Hello'} !</p>;
}

function Panneau({ langue }) {
  return <section className="panel"><h2>Profil</h2><Salutation langue={langue} /></section>;
}

function Page({ langue }) {
  return <Panneau langue={langue} />;
}

export default function App() {
  const [langue, setLangue] = useState('fr');
  return (
    <main>
      <h1>Réduis les props relais</h1>
      <p className="muted">État partagé : contexte et hooks personnalisés</p>
      {/* TODO(6401) : remplace la chaîne de props relais par un provider de langue ; garde menu et salutation synchronisés. */}
      <button onClick={() => setLangue((valeur) => valeur === 'fr' ? 'en' : 'fr')}>Changer la langue</button>
      <Page langue={langue} />
    </main>
  );
}
