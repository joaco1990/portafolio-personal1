import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

// Mock de Material-UI para evitar problemas con el tema
jest.mock('@mui/material', () => ({
  ...jest.requireActual('@mui/material'),
  ThemeProvider: ({ children }) => children,
  createTheme: () => ({}),
}));

describe('App Component', () => {
  beforeEach(() => {
    render(<App />);
  });

  test('debe mostrar el nombre completo exacto "Joaquín Nicolás Guzmán Buitrón"', () => {
    const nameElement = screen.getByText('Joaquín Nicolás Guzmán Buitrón');
    expect(nameElement).toBeInTheDocument();
  });

  test('debe existir una imagen con alt="fotografía de perfil"', () => {
    const photoElement = screen.getByAltText('fotografía de perfil');
    expect(photoElement).toBeInTheDocument();
    expect(photoElement).toHaveAttribute('src', 'foto.jpg');
  });

  test('debe aparecer el número de teléfono "0987144914"', () => {
    // Buscar el enlace del teléfono por su href específico
    const phoneLinks = screen.getAllByRole('link');
    const phoneLink = phoneLinks.find(link => link.href.includes('tel:0987144914'));
    
    // Verificar que el enlace existe
    expect(phoneLink).toBeDefined();
    expect(phoneLink).toBeInTheDocument();
    expect(phoneLink).toHaveAttribute('href', 'tel:0987144914');
  });

  test('debe contener al menos 5 habilidades reales en la sección de habilidades', () => {
    // Lista de habilidades que deben estar presentes
    const expectedSkills = [
      'Comunicación',
      'Liderazgo', 
      'Trabajo en equipo',
      'Adaptabilidad',
      'JavaScript'
    ];

    // Verificar que cada habilidad esté presente
    expectedSkills.forEach(skill => {
      // Usar getAllByText para manejar múltiples apariciones
      const skillElements = screen.getAllByText(skill);
      expect(skillElements.length).toBeGreaterThan(0);
    });

    // Verificar que hay al menos 5 habilidades
    expect(expectedSkills.length).toBeGreaterThanOrEqual(5);
  });

  test('debe contener al menos 3 descripciones claras en la sección de proyectos', () => {
    // Lista de descripciones de proyectos que deben estar presentes
    const expectedDescriptions = [
      'Desarrollo de aplicaciones web responsivas utilizando tecnologías modernas como React, Node.js y bases de datos.',
      'Creación de aplicaciones móviles nativas y multiplataforma para iOS y Android.',
      'Diseño e implementación de bases de datos relacionales y NoSQL para aplicaciones empresariales.'
    ];

    // Verificar que cada descripción esté presente
    expectedDescriptions.forEach(description => {
      const descriptionElement = screen.getByText(description);
      expect(descriptionElement).toBeInTheDocument();
    });

    // Verificar que hay al menos 3 descripciones
    expect(expectedDescriptions.length).toBeGreaterThanOrEqual(3);
  });
});
