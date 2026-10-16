import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App.jsx';

describe('Fiabilise trois comportements clés', () => {
  it('TODO(7501) : vérifie un comportement visible par une personne', async () => {
    const user = userEvent.setup();
    render(<App />);
    // TODO(7501) : trouver l’élément par rôle/label, effectuer l’action puis vérifier le résultat
    expect(screen.getByRole('heading', { name: 'Fiabilise trois comportements clés' })).toBeInTheDocument();
    void user;
  });
});
