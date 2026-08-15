import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Navbar from '../Navbar';

describe('Navbar Component', () => {
  it('renders brand name', () => {
    render(<Navbar />);
    expect(screen.getByText(/Sebastian Ortega Auriol/i)).toBeInTheDocument();
  });

  it('toggles mobile menu on button click', () => {
    render(<Navbar />);
    const toggleButton = screen.getByRole('button', { name: /toggle navigation/i });
    const collapseDiv = screen.getByText('Inicio').closest('#navbarNav');

    // Initially collapsed (should not have "show" class)
    expect(collapseDiv).not.toHaveClass('show');

    // Click to expand
    fireEvent.click(toggleButton);
    expect(collapseDiv).toHaveClass('show');

    // Click again to collapse
    fireEvent.click(toggleButton);
    expect(collapseDiv).not.toHaveClass('show');
  });
});
