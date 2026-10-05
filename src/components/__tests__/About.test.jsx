import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import About from '../About';

describe('About Component', () => {
  it('renders student role and internship availability badge', () => {
    render(<About />);
    expect(screen.getByText(/Analista Programador & Perfil Full Stack/i)).toBeInTheDocument();
    expect(screen.getAllByText(/Disponible para Práctica Profesional/i).length).toBeGreaterThan(0);
  });



  it('renders certifications section and certifications cards', () => {
    render(<About />);
    expect(screen.getByText(/Google AI Essentials/i)).toBeInTheDocument();
    expect(screen.getByText(/Red Hat System Administration/i)).toBeInTheDocument();
    expect(screen.getByText(/Gestión de Proyectos con Metodologías Ágiles/i)).toBeInTheDocument();
  });

  it('renders CV download button with correct href and filename', () => {
    render(<About />);
    const downloadLink = screen.getByRole('link', { name: /Descargar CV/i });
    expect(downloadLink).toBeInTheDocument();
    expect(downloadLink).toHaveAttribute('href', '/cv_sebastian_Ortega.pdf');
    expect(downloadLink).toHaveAttribute('download', 'CV_Sebastian_Ortega.pdf');
  });


  it('renders Credly profile link and verification buttons', () => {
    render(<About />);
    const credlyProfileLink = screen.getByRole('link', { name: /Ver Insignias Oficiales en Credly/i });
    expect(credlyProfileLink).toBeInTheDocument();
    expect(credlyProfileLink).toHaveAttribute('href', 'https://www.credly.com/users/sebastian.ortega');
    expect(screen.getAllByText(/Verificar Credencial/i).length).toBe(3);
  });

  it('renders 2 initial timeline cards and the expand button', () => {
    render(<About />);
    expect(screen.getByText(/Ver trayectoria completa/i)).toBeInTheDocument();
  });
});

