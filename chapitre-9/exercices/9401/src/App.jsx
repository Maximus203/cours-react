import { createBrowserRouter } from 'react-router';
import { RouterProvider } from 'react-router/dom';
import './styles.css';
function Accueil(){ return (<main><h1>Livre le parcours de SenShop</h1>      {/* TODO(9401) : utiliser uniquement les variables publiques côté client */}
      <p>URL de démonstration : {import.meta.env.VITE_API_URL || 'non configurée'}</p><p><a href="/ateliers">Ouvrir les ateliers</a></p></main>); }
function Ateliers(){ return <main><h1>Ateliers</h1><p>Liste de démonstration à compléter.</p></main>; }
function Inconnu(){ return <main><h1>Page introuvable</h1><p>Vérifie l’URL demandée.</p></main>; }
const routeur = createBrowserRouter([
  { path:'/', element:<Accueil /> },
  { path:'/ateliers', element:<Ateliers /> },
  // TODO(9401) : ajouter le segment dynamique ou la route imbriquée demandée
  { path:'*', element:<Inconnu /> },
]);
export default function App(){ return <RouterProvider router={routeur} />; }
