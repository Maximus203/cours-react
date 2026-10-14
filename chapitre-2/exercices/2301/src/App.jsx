import { useState } from 'react';

export default function App() {
  const [score, setScore] = useState(0);

  function ajouterDeux() {
    setScore(score + 1);
    setScore(score + 1);
  }

  return (
    <main>
      <h1>Défi des points</h1>
      <p className="info">Score : {score}</p>
      <button onClick={ajouterDeux}>Ajouter deux points</button>
    </main>
  );
}
