import React, { useState, Suspense, lazy } from 'react';
import {
  ThemeProvider,
  createTheme,
  Container,
  Box,
  Divider,
  CircularProgress,
  CssBaseline,
  Typography
} from '@mui/material';
import { motion } from 'framer-motion';

// Lazy loading de componentes
const Header = lazy(() => import('./components/Header'));
const Skills = lazy(() => import('./components/Skills'));
const Projects = lazy(() => import('./components/Projects'));

// Datos personales actualizados
const personalInfo = {
  name: 'Joaquín Nicolás Guzmán Buitrón',
  email: 'joacoguz@gmail.com',
  phone: '0987144914',
  photo: 'foto.jpg',
  photoAlt: 'fotografía de perfil',
  title: 'Desarrollador Full Stack & Ingeniero de Software',
  description: 'Profesional multifacético con experiencia en gastronomía y mantenimiento de equipos médicos. Actualmente cursando 5º semestre de Ingeniería de Software, enfocado en desarrollo web moderno y tecnologías emergentes.'
};

// Habilidades mejoradas y expandidas
const skills = [
  // Habilidades blandas
  { name: 'Comunicación Efectiva', icon: '💬', color: '#1976d2', level: 'Avanzado', category: 'soft' },
  { name: 'Liderazgo de Equipos', icon: '⭐', color: '#1976d2', level: 'Avanzado', category: 'soft' },
  { name: 'Trabajo en Equipo', icon: '👥', color: '#1976d2', level: 'Avanzado', category: 'soft' },
  { name: 'Resolución de Problemas', icon: '🧩', color: '#1976d2', level: 'Avanzado', category: 'soft' },
  { name: 'Adaptabilidad', icon: '🔄', color: '#1976d2', level: 'Avanzado', category: 'soft' },
  { name: 'Gestión de Proyectos', icon: '📊', color: '#1976d2', level: 'Intermedio', category: 'soft' },
  
  // Habilidades técnicas frontend
  { name: 'JavaScript (ES6+)', icon: '⚡', color: '#f7df1e', level: 'Intermedio', category: 'frontend' },
  { name: 'React.js', icon: '⚛️', color: '#61dafb', level: 'Intermedio', category: 'frontend' },
  { name: 'HTML5 & CSS3', icon: '🌐', color: '#e34f26', level: 'Intermedio', category: 'frontend' },
  { name: 'Material UI', icon: '🎨', color: '#0081cb', level: 'Intermedio', category: 'frontend' },
  { name: 'Responsive Design', icon: '📱', color: '#ff6b35', level: 'Intermedio', category: 'frontend' },
  
  // Habilidades técnicas backend
  { name: 'Node.js', icon: '🟢', color: '#339933', level: 'Básico', category: 'backend' },
  { name: 'Express.js', icon: '🚀', color: '#000000', level: 'Básico', category: 'backend' },
  { name: 'MongoDB', icon: '🍃', color: '#47a248', level: 'Básico', category: 'backend' },
  
  // Herramientas de desarrollo
  { name: 'Git & GitHub', icon: '📝', color: '#f05032', level: 'Intermedio', category: 'tools' },
  { name: 'VS Code', icon: '💻', color: '#007acc', level: 'Intermedio', category: 'tools' },
  { name: 'Jest Testing', icon: '🧪', color: '#c21325', level: 'Básico', category: 'tools' },
  { name: 'Framer Motion', icon: '🎬', color: '#0055ff', level: 'Básico', category: 'tools' },
  
  // Habilidades adicionales
  { name: 'Mantenimiento Médico', icon: '🏥', color: '#2196f3', level: 'Avanzado', category: 'other' },
  { name: 'Gestión Gastronómica', icon: '👨‍🍳', color: '#ff9800', level: 'Avanzado', category: 'other' }
];

// Proyectos mejorados y más específicos
const projects = [
  {
    title: 'Portafolio Personal',
    description: 'Portafolio web personal desarrollado con React y Material UI, incluyendo modo oscuro, animaciones con Framer Motion, lazy loading y pruebas unitarias automatizadas con Jest.',
    technologies: ['React', 'Material UI', 'Framer Motion', 'Jest', 'Testing Library'],
    icon: '🎨',
    link: 'https://github.com/joacoguz/portafolio-personal',
    status: 'Completado'
  },
  {
    title: 'Sistema de Gestión de Inventarios',
    description: 'Aplicación web para gestión de inventarios con interfaz intuitiva, reportes en tiempo real y sistema de alertas automáticas.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express.js', 'Material UI'],
    icon: '📦',
    link: '#',
    status: 'En Desarrollo'
  },
  {
    title: 'App de Gestión Gastronómica',
    description: 'Aplicación móvil para gestión de restaurantes con control de inventario, gestión de personal y análisis de ventas.',
    technologies: ['React Native', 'Firebase', 'Redux', 'Node.js'],
    icon: '🍽️',
    link: '#',
    status: 'Planificado'
  },
  {
    title: 'Sistema de Monitoreo Médico',
    description: 'Plataforma web para monitoreo remoto de equipos médicos con alertas en tiempo real y reportes automatizados.',
    technologies: ['React', 'WebSocket', 'Node.js', 'PostgreSQL', 'Docker'],
    icon: '🏥',
    link: '#',
    status: 'Planificado'
  },
  {
    title: 'E-commerce Responsive',
    description: 'Tienda online completa con carrito de compras, pasarela de pagos, gestión de usuarios y panel administrativo.',
    technologies: ['React', 'Stripe', 'Node.js', 'MongoDB', 'JWT'],
    icon: '🛒',
    link: '#',
    status: 'En Desarrollo'
  },
  {
    title: 'Dashboard Analytics',
    description: 'Dashboard interactivo con gráficos en tiempo real, filtros avanzados y exportación de datos en múltiples formatos.',
    technologies: ['React', 'Chart.js', 'D3.js', 'Node.js', 'Redis'],
    icon: '📊',
    link: '#',
    status: 'Planificado'
  }
];

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Crear tema dinámico mejorado
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
        light: '#ff5983',
        dark: '#9a0036',
      },
      background: {
        default: isDarkMode ? '#121212' : '#fafafa',
        paper: isDarkMode ? '#1e1e1e' : '#ffffff',
      },
      text: {
        primary: isDarkMode ? '#ffffff' : '#000000',
        secondary: isDarkMode ? '#b0b0b0' : '#666666',
      },
    },
    typography: {
      h3: {
        fontWeight: 600,
        fontSize: '2.5rem',
      },
      h4: {
        fontWeight: 500,
        fontSize: '2rem',
      },
      h5: {
        fontWeight: 500,
        fontSize: '1.5rem',
      },
      body1: {
        fontSize: '1rem',
        lineHeight: 1.6,
      },
    },
    components: {
      MuiCard: {
        styleOverrides: {
          root: {
            transition: 'all 0.3s ease-in-out',
            borderRadius: 12,
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 8,
            textTransform: 'none',
            fontWeight: 500,
          },
        },
      },
      MuiChip: {
        styleOverrides: {
          root: {
            borderRadius: 16,
          },
        },
      },
    },
  });

  const handleToggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Loading component mejorado
  const LoadingSpinner = () => (
    <Box sx={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '200px',
      flexDirection: 'column',
      gap: 2
    }}>
      <CircularProgress size={40} />
      <Typography variant="body2" color="text.secondary">
        Cargando...
      </Typography>
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
