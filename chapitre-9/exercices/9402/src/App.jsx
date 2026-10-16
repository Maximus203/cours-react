import { useState } from 'react';
import { createBrowserRouter, Link, useParams } from 'react-router';
import { RouterProvider } from 'react-router/dom';
import './styles.css';

const produits = [
  { id: 'cahier-kora', nom: 'Cahier Kora', categorie: 'Papeterie', prix: 3500 },
  { id: 'sac-baobab', nom: 'Sac Baobab', categorie: 'Accessoires', prix: 12500 },
  { id: 'lampe-sunu', nom: 'Lampe Sunu', categorie: 'Maison', prix: 18000 },
];

function Accueil() {
  const [recherche, setRecherche] = useState('');
  const valeur = recherche.trim().toLowerCase();
  const erreur = valeur === 'erreur';
  const resultats = produits.filter((produit) => produit.nom.toLowerCase().includes(valeur));

  return (
    <main>
      <h1>SenShop — contrôle avant livraison</h1>
      {/* TODO(9402) : documente les vérifications de livraison dans LIVRAISON.md. */}
      <label htmlFor="recherche">Rechercher un produit</label>
      <input id="recherche" value={recherche} onChange={(event) => setRecherche(event.target.value)} />
      {erreur ? <p role="alert">Recherche indisponible. Réessaie.</p> : resultats.length === 0 ? <p role="status">Aucun produit trouvé.</p> : (
        <ul>{resultats.map((produit) => <li key={produit.id}><Link to={`/produits/${produit.id}`}>{produit.nom}</Link></li>)}</ul>
      )}
    </main>
  );
}

function FicheProduit() {
  const { produitId } = useParams();
  const produit = produits.find((item) => item.id === produitId);
  if (!produit) return <main><h1>Produit introuvable</h1><Link to="/">Retour au catalogue</Link></main>;
  return <main><h1>{produit.nom}</h1><p>{produit.categorie} — {produit.prix} FCFA</p><Link to="/">Retour au catalogue</Link></main>;
}

function Inconnu() { return <main><h1>Page introuvable</h1><Link to="/">Retour à SenShop</Link></main>; }

const routeur = createBrowserRouter([
  { path: '/', element: <Accueil /> },
  { path: '/produits/:produitId', element: <FicheProduit /> },
  { path: '*', element: <Inconnu /> },
]);

export default function App() { return <RouterProvider router={routeur} />; }
