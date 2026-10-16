import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App.jsx';

describe('Audit qualité et performance', () => {
  it('TODO(7502) : vérifie un comportement visible par une personne', async () => {
    const user = userEvent.setup();
    render(<App />);
    // TODO(7502) : trouver l’élément par rôle/label, effectuer l’action puis vérifier le résultat
    expect(screen.getByRole('heading', { name: 'Audit qualité et performance' })).toBeInTheDocument();
    void user;
  });
});
