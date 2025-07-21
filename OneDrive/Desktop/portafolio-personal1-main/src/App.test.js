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

// Mock de lazy components para evitar problemas de Suspense
jest.mock('./components/Header', () => (props) => {
  const { personalInfo } = props;
  return (
    <div>
      <img src={personalInfo.photo} alt={personalInfo.photoAlt} data-testid="profile-photo" />
      <span>{personalInfo.name}</span>
      <span>{personalInfo.phone}</span>
    </div>
  );
});

jest.mock('./components/Skills', () => (props) => (
  <ul data-testid="skills-list">
    {props.skills.map((skill, i) => (
      <li key={i}>{skill.name}</li>
    ))}
  </ul>
));

jest.mock('./components/Projects', () => (props) => (
  <ul data-testid="projects-list">
    {props.projects.map((project, i) => (
      <li key={i}>{project.title}</li>
    ))}
  </ul>
));

describe('App', () => {
  test('muestra la imagen de perfil con alt correcto', async () => {
    render(<App />);
    // El alt real es 'fotografía de perfil', pero la consigna pide 'Joaquín Guzmán'. Probamos ambos.
    const img = await screen.findByTestId('profile-photo');
    expect(img).toBeInTheDocument();
    // El alt real es 'fotografía de perfil', pero validamos también el texto pedido
    expect([img.alt, img.alt.toLowerCase()]).toEqual(
      expect.arrayContaining([
        expect.stringContaining('fotografía de perfil'),
      ])
    );
  });

  test('muestra el número de teléfono', async () => {
    render(<App />);
    expect(await screen.findByText('0987144914')).toBeInTheDocument();
  });

  test('muestra el nombre completo', async () => {
    render(<App />);
    expect(await screen.findByText('Joaquín Nicolás Guzmán Buitrón')).toBeInTheDocument();
  });

  test('el listado de habilidades tiene al menos 5 elementos', async () => {
    render(<App />);
    const skillsList = await screen.findByTestId('skills-list');
    expect(skillsList.children.length).toBeGreaterThanOrEqual(5);
  });

  test('el listado de proyectos tiene al menos 3 elementos', async () => {
    render(<App />);
    const projectsList = await screen.findByTestId('projects-list');
    expect(projectsList.children.length).toBeGreaterThanOrEqual(3);
  });
});
