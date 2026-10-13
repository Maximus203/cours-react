export default function CarteProfil({ nom, metier }) {
  return (
    <article className="carte">
      <h2>{nom}</h2>
      <p>{metier}</p>
    </article>
  );
}
