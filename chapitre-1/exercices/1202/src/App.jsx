import CarteProfil from './CarteProfil.jsx';

export default function App() {
  return (
    <main>
      <h1>L’équipe de Teranga Academy</h1>
      <div className="grille">
        <CarteProfil nom="Awa Ndiaye" metier="Designeuse" />
        <CarteProfil nom="Moussa Diallo" />
      </div>
    </main>
  );
}
