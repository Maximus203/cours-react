import CarteProfil from './CarteProfil.jsx';

export default function App() {
  return (
    <main>
      <h1>Profils de l’équipe</h1>
      <div className="grille">
        <CarteProfil nom="Awa Ndiaye" metier="Développeuse front-end" />
        <CarteProfil nom="Moussa Diallo" metier="Développeur back-end" />
      </div>
    </main>
  );
}
