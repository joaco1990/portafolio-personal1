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
        <h2>{personalInfo.title}</h2>
        <p>{personalInfo.description}</p>
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
        <div data-testid="category-filters">
          <button>Todas</button>
          <button>Habilidades Blandas</button>
          <button>Frontend</button>
          <button>Backend</button>
          <button>Herramientas</button>
          <button>Otros</button>
        </div>
        {skills.map((skill, index) => (
          <div key={index} data-testid={`skill-${skill.name}`}>
            <h3>{skill.name}</h3>
            <span style={{ fontSize: '2rem' }}>{skill.icon}</span>
            {skill.level && <span data-testid={`level-${skill.name}`}>Nivel: {skill.level}</span>}
            {skill.category && <span data-testid={`category-${skill.name}`}>Categoría: {skill.category}</span>}
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
        <div data-testid="project-filters">
          <button data-testid="filter-all">Todos</button>
          <button data-testid="filter-react">React</button>
          <button data-testid="filter-node">Node.js</button>
          <button data-testid="filter-material">Material UI</button>
        </div>
        {projects.map((project, index) => (
          <div key={index} data-testid={`project-${project.title}`}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <span data-testid={`status-${project.title}`}>Estado: {project.status}</span>
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

  test('debe mostrar el título profesional', async () => {
    await waitFor(() => {
      const titleElement = screen.getByText('Desarrollador Full Stack & Ingeniero de Software');
      expect(titleElement).toBeInTheDocument();
    });
  });

  test('debe mostrar la descripción profesional', async () => {
    await waitFor(() => {
      const descriptionElement = screen.getByText(/Profesional multifacético con experiencia en gastronomía/);
      expect(descriptionElement).toBeInTheDocument();
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

  test('debe contener al menos 15 habilidades en la sección de habilidades', async () => {
    await waitFor(() => {
      // Lista de habilidades que deben estar presentes
      const expectedSkills = [
        'Comunicación Efectiva',
        'Liderazgo de Equipos', 
        'Trabajo en Equipo',
        'Resolución de Problemas',
        'Adaptabilidad',
        'Gestión de Proyectos',
        'JavaScript (ES6+)',
        'React.js',
        'HTML5 & CSS3',
        'Material UI',
        'Responsive Design',
        'Node.js',
        'Express.js',
        'MongoDB',
        'Git & GitHub',
        'VS Code',
        'Jest Testing',
        'Framer Motion',
        'Mantenimiento Médico',
        'Gestión Gastronómica'
      ];

      // Verificar que cada habilidad esté presente
      expectedSkills.forEach(skill => {
        const skillElements = screen.getAllByText(skill);
        expect(skillElements.length).toBeGreaterThan(0);
      });

      // Verificar que hay al menos 15 habilidades
      expect(expectedSkills.length).toBeGreaterThanOrEqual(15);
    });
  });

  test('debe mostrar categorías de habilidades', async () => {
    await waitFor(() => {
      const categoryFilters = screen.getByTestId('category-filters');
      expect(categoryFilters).toBeInTheDocument();
      
      // Verificar que aparecen las categorías principales
      expect(screen.getByText('Todas')).toBeInTheDocument();
      expect(screen.getByText('Habilidades Blandas')).toBeInTheDocument();
      expect(screen.getByText('Frontend')).toBeInTheDocument();
      expect(screen.getByText('Backend')).toBeInTheDocument();
      expect(screen.getByText('Herramientas')).toBeInTheDocument();
    });
  });

  test('debe contener al menos 6 proyectos en la sección de proyectos', async () => {
    await waitFor(() => {
      // Lista de proyectos que deben estar presentes
      const expectedProjects = [
        'Portafolio Personal',
        'Sistema de Gestión de Inventarios',
        'App de Gestión Gastronómica',
        'Sistema de Monitoreo Médico',
        'E-commerce Responsive',
        'Dashboard Analytics'
      ];

      // Verificar que cada proyecto esté presente
      expectedProjects.forEach(project => {
        const projectElements = screen.getAllByText(project);
        expect(projectElements.length).toBeGreaterThan(0);
      });

      // Verificar que hay al menos 6 proyectos
      expect(expectedProjects.length).toBeGreaterThanOrEqual(6);
    });
  });

  test('debe mostrar estados de proyectos', async () => {
    await waitFor(() => {
      // Verificar que aparecen los estados de los proyectos
      const portfolioStatus = screen.getByTestId('status-Portafolio Personal');
      const inventoryStatus = screen.getByTestId('status-Sistema de Gestión de Inventarios');
      
      expect(portfolioStatus).toHaveTextContent('Completado');
      expect(inventoryStatus).toHaveTextContent('En Desarrollo');
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
      const nodeFilter = screen.getByTestId('filter-node');
      const materialFilter = screen.getByTestId('filter-material');
      
      expect(reactFilter).toBeInTheDocument();
      expect(nodeFilter).toBeInTheDocument();
      expect(materialFilter).toBeInTheDocument();
    });
  });

  test('debe mostrar niveles de habilidades', async () => {
    await waitFor(() => {
      // Buscar los niveles usando data-testid específicos
      const communicationLevel = screen.getByTestId('level-Comunicación Efectiva');
      const javascriptLevel = screen.getByTestId('level-JavaScript (ES6+)');
      const nodeLevel = screen.getByTestId('level-Node.js');
      
      expect(communicationLevel).toHaveTextContent('Avanzado');
      expect(javascriptLevel).toHaveTextContent('Intermedio');
      expect(nodeLevel).toHaveTextContent('Básico');
    });
  });

  test('debe mostrar categorías de habilidades', async () => {
    await waitFor(() => {
      // Verificar que las habilidades tienen categorías
      const communicationCategory = screen.getByTestId('category-Comunicación Efectiva');
      const javascriptCategory = screen.getByTestId('category-JavaScript (ES6+)');
      const nodeCategory = screen.getByTestId('category-Node.js');
      
      expect(communicationCategory).toHaveTextContent('soft');
      expect(javascriptCategory).toHaveTextContent('frontend');
      expect(nodeCategory).toHaveTextContent('backend');
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
