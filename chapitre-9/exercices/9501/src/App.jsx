import { createBrowserRouter } from 'react-router';
import { RouterProvider } from 'react-router/dom';
import './styles.css';
function Accueil(){ return (<main><h1>Fais une livraison vérifiable</h1>      {/* TODO(9501) : ajouter routes et vérifier URL profonde en preview */}
      <nav><a href="/">Accueil</a><a href="/ateliers/1">Atelier 1</a></nav><p><a href="/ateliers">Ouvrir les ateliers</a></p></main>); }
function Ateliers(){ return <main><h1>Ateliers</h1><p>Liste de démonstration à compléter.</p></main>; }
function Inconnu(){ return <main><h1>Page introuvable</h1><p>Vérifie l’URL demandée.</p></main>; }
const routeur = createBrowserRouter([
  { path:'/', element:<Accueil /> },
  { path:'/ateliers', element:<Ateliers /> },
  // TODO(9501) : ajouter le segment dynamique ou la route imbriquée demandée
  { path:'*', element:<Inconnu /> },
]);
export default function App(){ return <RouterProvider router={routeur} />; }
