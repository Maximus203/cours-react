import { createContext, useContext } from 'react';

const SessionContext = createContext(null);
const utilisateur = { prenom: 'Aïssatou', role: 'Étudiante' };

function Entete() {
  const session = useContext(SessionContext);
  return <header><h2>Atelier React</h2><p>Connectée : {session.prenom}</p></header>;
}

function Profil() {
  const session = useContext(SessionContext);
  return <section className="panel"><h2>Profil</h2><p>Nom : {session.prenom}</p><p>Rôle : {session.role}</p></section>;
}

export default function App() {
  return (
    <SessionContext.Provider value={utilisateur}>
      <main>
        <h1>Partage une session de démonstration</h1>
        <p className="muted">Un même utilisateur fictif est lu dans deux composants descendants.</p>
        <Entete />
        <Profil />
      </main>
    </SessionContext.Provider>
  );
}
