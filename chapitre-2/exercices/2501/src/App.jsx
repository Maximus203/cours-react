import CarteProfil from './CarteProfil.jsx';

export default function App() {
  return (
    <main>
      <h1>Équipe du studio</h1>
      <p className="info">TODO profils ouverts sur 2</p>
      <div className="grille">
        <CarteProfil nom="Awa Ndiaye" />
        <CarteProfil nom="Moussa Diallo" />
      </div>
    </main>
  );
}
