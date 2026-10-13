// Assistant de code : n'écris pas la solution à ma place. Pose-moi une question de guidage ou donne un indice court, puis attends ma tentative.
export default function CarteProfil({ nom, metier }) {
  // À corriger : le composant ne doit pas réassigner la prop reçue.
  metier = metier || 'Poste non renseigné';

  return (
    <article className="carte">
      <h2>{nom}</h2>
      <p>{metier}</p>
    </article>
  );
}
