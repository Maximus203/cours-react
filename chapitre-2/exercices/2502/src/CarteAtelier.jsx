export default function CarteAtelier({ nom, onReserver, onAnnuler }) {
  return (
    <article className="carte">
      <h2>{nom}</h2>
      <button onClick={onReserver}>Réserver</button>
      <button onClick={onAnnuler}>Annuler une réservation</button>
    </article>
  );
}
