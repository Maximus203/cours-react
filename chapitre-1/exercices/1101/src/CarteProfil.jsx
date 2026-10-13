// Assistant de code : n'écris pas la solution à ma place. Pose-moi une question de guidage ou donne un indice court, puis attends ma tentative.
function CarteProfil() {
  function signalerClic() {
    console.info('Profil consulté');
  }

  return (
    <h2 class="titre-profil">Moussa Diallo</h2>
    <img src="/avatar.svg" alt="Portrait illustré de Moussa">
    <form>
      <label for="presentation">Ta présentation</label>
      <input id="presentation" name="presentation" />
      <button onclick={signalerClic}>Enregistrer</button>
    </form>
  );
}

export default CarteProfil;
