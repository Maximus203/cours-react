import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App.jsx';

describe('Teste recherche, vide et erreur', () => {
  it('TODO(7302) : vérifie un comportement visible par une personne', async () => {
    const user = userEvent.setup();
    render(<App />);
    // TODO(7302) : trouver l’élément par rôle/label, effectuer l’action puis vérifier le résultat
    expect(screen.getByRole('heading', { name: 'Teste recherche, vide et erreur' })).toBeInTheDocument();
    void user;
  });
});
