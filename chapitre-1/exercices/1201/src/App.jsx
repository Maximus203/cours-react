import CarteCategorie from './CarteCategorie.jsx';
import CarteProduit from './CarteProduit.jsx';

export default function App() {
  return (
    <main>
      <h1>Le catalogue de SenShop</h1>
      <div className="grille">
        <CarteCategorie nom="Téléphones" />
        <CarteProduit nom="Casque audio" prix="12 500 FCFA" />
        {/* TODO : ajoute un second produit différent */}
      </div>
    </main>
  );
}
