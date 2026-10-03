import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Projects from '../Projects';

describe('Projects Component', () => {
  it('renders section title and project cards', () => {
    render(<Projects />);
    expect(screen.getByRole('heading', { name: /Proyectos Destacados/i })).toBeInTheDocument();
  });

  it('renders CRM with AI assistant and AlkeWallet from updated CV', () => {
    render(<Projects />);
    expect(screen.getByText(/CRM Empresarial con IA Dual & Dashboard en Tiempo Real/i)).toBeInTheDocument();
    expect(screen.getByText(/AlkeWallet — Billetera Digital & Core Transaccional/i)).toBeInTheDocument();
  });


  it('renders technologies badges for the projects', () => {
    render(<Projects />);
    expect(screen.getAllByText('React 19').length).toBeGreaterThan(0);
    expect(screen.getAllByText('PostgreSQL').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Docker').length).toBeGreaterThan(0);
  });
});
