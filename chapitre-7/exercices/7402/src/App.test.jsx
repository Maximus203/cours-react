import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App.jsx';

describe('Profile avant de mémoïser', () => {
  it('filtre les ateliers selon le texte saisi', async () => {
    const user = userEvent.setup();
    render(<App />);

    expect(screen.getByRole('list', { name: 'Ateliers disponibles' })).toBeInTheDocument();
    await user.type(screen.getByRole('textbox', { name: 'Filtrer les ateliers' }), 'formulaires');

    expect(screen.getByText('Formulaires contrôlés — groupe 1')).toBeInTheDocument();
    expect(screen.queryByText('JavaScript pour le navigateur — groupe 1')).not.toBeInTheDocument();
  });
});
