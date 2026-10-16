import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App.jsx';

describe('Profile avant de mémoïser', () => {
  it('TODO(7402) : vérifie un comportement visible par une personne', async () => {
    const user = userEvent.setup();
    render(<App />);
    // TODO(7402) : trouver l’élément par rôle/label, effectuer l’action puis vérifier le résultat
    expect(screen.getByRole('heading', { name: 'Profile avant de mémoïser' })).toBeInTheDocument();
    void user;
  });
});
