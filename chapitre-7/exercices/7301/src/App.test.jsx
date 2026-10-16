import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App.jsx';

describe('Le test casse avant le correctif', () => {
  it('ajoute au panier après le clic', async () => {
    const user = userEvent.setup();
    render(<App />);
    await user.click(screen.getByRole('button', { name: 'Ajouter au panier' }));
    expect(screen.getByRole('button', { name: 'Ajouté au panier' })).toBeInTheDocument();
  });
});
