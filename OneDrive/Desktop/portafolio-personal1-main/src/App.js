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

// Importar datos desde archivos independientes
import personalInfo from './data/personalInfo';
import skills from './data/skills';
import projects from './data/projects';

// Lazy loading de componentes
const Header = lazy(() => import('./components/Header'));
const Skills = lazy(() => import('./components/Skills'));
const Projects = lazy(() => import('./components/Projects'));

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
