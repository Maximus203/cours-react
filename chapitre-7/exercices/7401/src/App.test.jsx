import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App.jsx';

describe('Une suite de tests utile', () => {
  it('TODO(7401) : vérifie un comportement visible par une personne', async () => {
    const user = userEvent.setup();
    render(<App />);
    // TODO(7401) : trouver l’élément par rôle/label, effectuer l’action puis vérifier le résultat
    expect(screen.getByRole('heading', { name: 'Une suite de tests utile' })).toBeInTheDocument();
    void user;
  });
});
