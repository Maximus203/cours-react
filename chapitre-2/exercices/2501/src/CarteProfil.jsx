
export default function CarteProfil({ nom, estDeplie, onToggle }) {
  
  return (
    <article className="carte">
      <h2>{nom}</h2>

      <button onClick={onToggle}>
      {estDeplie ? 'Masquer' : 'Voir plus'}
      </button>

      {estDeplie && <p>Présentation de {nom}.</p>}
    </article>
  );
}
