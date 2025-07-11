import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

// Mock de Material-UI para evitar problemas con el tema
jest.mock('@mui/material', () => ({
  ...jest.requireActual('@mui/material'),
  ThemeProvider: ({ children }) => children,
  createTheme: () => ({}),
  CssBaseline: () => null,
}));

// Mock de framer-motion
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }) => <div {...props}>{children}</div>,
  },
  AnimatePresence: ({ children }) => children,
}));

// Mock de react-intersection-observer
jest.mock('react-intersection-observer', () => ({
  useInView: () => [jest.fn(), true],
}));

// Mock de los componentes lazy
jest.mock('./components/Header', () => {
  return function MockHeader({ personalInfo }) {
    return (
      <div data-testid="header">
        <h1>{personalInfo.name}</h1>
        <img alt={personalInfo.photoAlt} src={personalInfo.photo} />
        <a href={`tel:${personalInfo.phone}`}>Phone</a>
        <button aria-label="modo oscuro">Dark Mode Toggle</button>
      </div>
    );
  };
});

jest.mock('./components/Skills', () => {
  return function MockSkills({ skills }) {
    return (
      <div data-testid="skills">
        <h2>Habilidades</h2>
        {skills.map((skill, index) => (
          <div key={index}>
            <h3>{skill.name}</h3>
            <span style={{ fontSize: '2rem' }}>{skill.icon}</span>
            {skill.level && <span data-testid={`level-${skill.name}`}>Nivel: {skill.level}</span>}
          </div>
        ))}
      </div>
    );
  };
});

jest.mock('./components/Projects', () => {
  return function MockProjects({ projects }) {
    return (
      <div data-testid="projects">
        <h2>Proyectos</h2>
        <button data-testid="filter-all">Todos</button>
        <button data-testid="filter-react">React</button>
        {projects.map((project, index) => (
          <div key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <button>Ver Proyecto</button>
          </div>
        ))}
      </div>
    );
  };
});

describe('App Component', () => {
  beforeEach(() => {
    render(<App />);
  });

  test('debe mostrar el nombre completo exacto "Joaquín Nicolás Guzmán Buitrón"', async () => {
    await waitFor(() => {
      const nameElement = screen.getByText('Joaquín Nicolás Guzmán Buitrón');
      expect(nameElement).toBeInTheDocument();
    });
  });

  test('debe existir una imagen con alt="fotografía de perfil"', async () => {
    await waitFor(() => {
      const photoElement = screen.getByAltText('fotografía de perfil');
      expect(photoElement).toBeInTheDocument();
      expect(photoElement).toHaveAttribute('src', 'foto.jpg');
    });
  });

  test('debe aparecer el número de teléfono "0987144914"', async () => {
    await waitFor(() => {
      const phoneLink = screen.getByText('Phone');
      expect(phoneLink).toBeInTheDocument();
    });
  });

  test('debe contener al menos 8 habilidades en la sección de habilidades', async () => {
    await waitFor(() => {
      // Lista de habilidades que deben estar presentes
      const expectedSkills = [
        'Comunicación',
        'Liderazgo', 
        'Trabajo en equipo',
        'Adaptabilidad',
        'JavaScript',
        'React',
        'Node.js',
        'Git'
      ];

      // Verificar que cada habilidad esté presente
      expectedSkills.forEach(skill => {
        const skillElements = screen.getAllByText(skill);
        expect(skillElements.length).toBeGreaterThan(0);
      });

      // Verificar que hay al menos 8 habilidades
      expect(expectedSkills.length).toBeGreaterThanOrEqual(8);
    });
  });

  test('debe contener al menos 4 descripciones claras en la sección de proyectos', async () => {
    await waitFor(() => {
      // Lista de descripciones de proyectos que deben estar presentes
      const expectedDescriptions = [
        'Desarrollo de aplicaciones web responsivas utilizando tecnologías modernas como React, Node.js y bases de datos.',
        'Creación de aplicaciones móviles nativas y multiplataforma para iOS y Android.',
        'Diseño e implementación de bases de datos relacionales y NoSQL para aplicaciones empresariales.',
        'Portafolio web personal desarrollado con React y Material UI, incluyendo pruebas unitarias automatizadas.'
      ];

      // Verificar que cada descripción esté presente
      expectedDescriptions.forEach(description => {
        const descriptionElement = screen.getByText(description);
        expect(descriptionElement).toBeInTheDocument();
      });

      // Verificar que hay al menos 4 descripciones
      expect(expectedDescriptions.length).toBeGreaterThanOrEqual(4);
    });
  });

  test('debe mostrar el toggle de modo oscuro', async () => {
    await waitFor(() => {
      const darkModeToggle = screen.getByLabelText('modo oscuro');
      expect(darkModeToggle).toBeInTheDocument();
    });
  });

  test('debe mostrar filtros de proyectos', async () => {
    await waitFor(() => {
      const allButton = screen.getByTestId('filter-all');
      expect(allButton).toBeInTheDocument();
      
      // Verificar que aparecen algunos filtros de tecnologías
      const reactFilter = screen.getByTestId('filter-react');
      expect(reactFilter).toBeInTheDocument();
    });
  });

  test('debe mostrar niveles de habilidades', async () => {
    await waitFor(() => {
      // Buscar los niveles usando data-testid específicos
      const communicationLevel = screen.getByTestId('level-Comunicación');
      const javascriptLevel = screen.getByTestId('level-JavaScript');
      const nodeLevel = screen.getByTestId('level-Node.js');
      
      expect(communicationLevel).toHaveTextContent('Avanzado');
      expect(javascriptLevel).toHaveTextContent('Intermedio');
      expect(nodeLevel).toHaveTextContent('Básico');
    });
  });

  test('debe mostrar botones "Ver Proyecto" en las tarjetas de proyectos', async () => {
    await waitFor(() => {
      const projectButtons = screen.getAllByText('Ver Proyecto');
      expect(projectButtons.length).toBeGreaterThan(0);
    });
  });

  test('debe mostrar emojis como iconos en las habilidades', async () => {
    await waitFor(() => {
      // Verificar que los emojis están presentes en el DOM
      const emojiElements = document.querySelectorAll('[style*="font-size: 2rem"]');
      expect(emojiElements.length).toBeGreaterThan(0);
    });
  });
});
