import { createBrowserRouter, Link, useParams } from 'react-router';
import { RouterProvider } from 'react-router/dom';
import './styles.css';

const produits = [
  { id: 'cahier-kora', nom: 'Cahier Kora', categorie: 'Papeterie', prix: 3500 },
  { id: 'sac-baobab', nom: 'Sac Baobab', categorie: 'Accessoires', prix: 12500 },
  { id: 'lampe-sunu', nom: 'Lampe Sunu', categorie: 'Maison', prix: 18000 },
];

function Accueil() {
  return (
    <main>
      <h1>SenShop — catalogue</h1>
      <p>Catalogue fictif pour apprendre les routes d’une boutique React.</p>
      {/* TODO(9401) : ajouter la recherche et filtrer les produits, puis créer une fiche produit dynamique. */}
      <ul>{produits.map((produit) => (
        <li key={produit.id}>
          <Link to={`/produits/${produit.id}`}>{produit.nom}</Link> — {produit.prix} FCFA
        </li>
      ))}</ul>
    </main>
  );
}

function FicheProduit() {
  const { produitId } = useParams();
  const produit = produits.find((item) => item.id === produitId);
  if (!produit) return <main><h1>Produit introuvable</h1><Link to="/">Retour au catalogue</Link></main>;
  return (
    <main>
      <h1>{produit.nom}</h1>
      <p>{produit.categorie}</p>
      <p>{produit.prix} FCFA</p>
      <Link to="/">Retour au catalogue</Link>
    </main>
  );
}

function Inconnu() {
  return <main><h1>Page introuvable</h1><p>Vérifie l’URL demandée.</p></main>;
}

const routeur = createBrowserRouter([
  { path: '/', element: <Accueil /> },
  { path: '/produits/:produitId', element: <FicheProduit /> },
  { path: '*', element: <Inconnu /> },
]);

export default function App() {
  return <RouterProvider router={routeur} />;
}
