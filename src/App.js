import React, { useState, Suspense, lazy } from 'react';
import {
  ThemeProvider,
  createTheme,
  Container,
  Box,
  Divider,
  CircularProgress,
  CssBaseline
} from '@mui/material';
import { motion } from 'framer-motion';

// Lazy loading de componentes
const Header = lazy(() => import('./components/Header'));
const Skills = lazy(() => import('./components/Skills'));
const Projects = lazy(() => import('./components/Projects'));

// Datos personales
const personalInfo = {
  name: 'Joaquín Nicolás Guzmán Buitrón',
  email: 'joacoguz@gmail.com',
  phone: '0987144914',
  photo: 'foto.jpg',
  photoAlt: 'fotografía de perfil'
};

// Habilidades mejoradas
const skills = [
  { name: 'Comunicación', icon: '💬', color: '#1976d2', level: 'Avanzado' },
  { name: 'Liderazgo', icon: '⭐', color: '#1976d2', level: 'Avanzado' },
  { name: 'Trabajo en equipo', icon: '👥', color: '#1976d2', level: 'Avanzado' },
  { name: 'Adaptabilidad', icon: '🔄', color: '#1976d2', level: 'Avanzado' },
  { name: 'JavaScript', icon: '⚡', color: '#f7df1e', level: 'Intermedio' },
  { name: 'React', icon: '⚛️', color: '#61dafb', level: 'Intermedio' },
  { name: 'Node.js', icon: '🟢', color: '#339933', level: 'Básico' },
  { name: 'Git', icon: '📝', color: '#f05032', level: 'Intermedio' }
];

// Proyectos mejorados
const projects = [
  {
    title: 'Desarrollo web',
    description: 'Desarrollo de aplicaciones web responsivas utilizando tecnologías modernas como React, Node.js y bases de datos.',
    technologies: ['React', 'Node.js', 'HTML/CSS', 'JavaScript'],
    icon: '🌐',
    link: '#'
  },
  {
    title: 'Aplicaciones móviles',
    description: 'Creación de aplicaciones móviles nativas y multiplataforma para iOS y Android.',
    technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin'],
    icon: '📱',
    link: '#'
  },
  {
    title: 'Bases de datos',
    description: 'Diseño e implementación de bases de datos relacionales y NoSQL para aplicaciones empresariales.',
    technologies: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis'],
    icon: '🗄️',
    link: '#'
  },
  {
    title: 'Portafolio Personal',
    description: 'Portafolio web personal desarrollado con React y Material UI, incluyendo pruebas unitarias automatizadas.',
    technologies: ['React', 'Material UI', 'Jest', 'Testing Library'],
    icon: '🎨',
    link: '#'
  }
];

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Crear tema dinámico
  const theme = createTheme({
    palette: {
      mode: isDarkMode ? 'dark' : 'light',
      primary: {
        main: '#1976d2',
        light: '#42a5f5',
        dark: '#1565c0',
      },
      secondary: {
        main: '#dc004e',
      },
      background: {
        default: isDarkMode ? '#121212' : '#fafafa',
        paper: isDarkMode ? '#1e1e1e' : '#ffffff',
      },
    },
    typography: {
      h3: {
        fontWeight: 600,
      },
      h4: {
        fontWeight: 500,
      },
    },
    components: {
      MuiCard: {
        styleOverrides: {
          root: {
            transition: 'all 0.3s ease-in-out',
          },
        },
      },
    },
  });

  const handleToggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Loading component
  const LoadingSpinner = () => (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px' }}>
      <CircularProgress />
    </Box>
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Container maxWidth="lg" sx={{ py: 4 }}>
          <Suspense fallback={<LoadingSpinner />}>
            <Header 
              personalInfo={personalInfo} 
              isDarkMode={isDarkMode} 
              onToggleTheme={handleToggleTheme} 
            />
          </Suspense>

          <Divider sx={{ my: 4 }} />

          <Suspense fallback={<LoadingSpinner />}>
            <Skills skills={skills} />
          </Suspense>

          <Divider sx={{ my: 4 }} />

          <Suspense fallback={<LoadingSpinner />}>
            <Projects projects={projects} />
          </Suspense>
        </Container>
      </motion.div>
    </ThemeProvider>
  );
}

export default App;
