import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Skills from '../Skills';

describe('Skills Component', () => {
  it('renders all four skill category headers', () => {
    render(<Skills />);
    expect(screen.getByRole('heading', { name: /IA & AI-Driven Dev/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Frontend & Lenguajes/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Backend & Bases de Datos/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Herramientas & Metodologías/i })).toBeInTheDocument();
  });

  it('renders key new technologies from the updated CV', () => {
    render(<Skills />);
    expect(screen.getByText(/Spec-Driven Development \(SDD\)/i)).toBeInTheDocument();
    expect(screen.getByText(/Orquestación Multi-Agente/i)).toBeInTheDocument();
    expect(screen.getByText(/TypeScript/i)).toBeInTheDocument();
    expect(screen.getByText(/Linux \(Red Hat RH124\)/i)).toBeInTheDocument();
  });

  it('renders key competencies section', () => {
    render(<Skills />);
    expect(screen.getByRole('heading', { name: /Competencias Clave/i })).toBeInTheDocument();
    expect(screen.getByText(/Liderazgo y Gestión/i)).toBeInTheDocument();
  });
});
