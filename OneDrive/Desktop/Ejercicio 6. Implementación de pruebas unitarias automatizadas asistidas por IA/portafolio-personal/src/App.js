import React from 'react';
import {
  ThemeProvider,
  createTheme,
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  Grid,
  Avatar,
  Chip,
  Paper,
  Divider,
  IconButton,
  Link
} from '@mui/material';
import {
  Email,
  Phone,
  GitHub,
  LinkedIn,
  Chat,
  Star,
  Group,
  AutoAwesome,
  Code,
  Web,
  PhoneAndroid,
  Storage
} from '@mui/icons-material';

// Crear tema azul
const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
      light: '#42a5f5',
      dark: '#1565c0',
    },
    secondary: {
      main: '#dc004e',
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
});

// Datos personales
const personalInfo = {
  name: 'Joaquín Nicolás Guzmán Buitrón',
  email: 'joacoguz@gmail.com',
  phone: '0987144914',
  photo: 'foto.jpg',
  photoAlt: 'fotografía de perfil'
};

// Habilidades
const skills = [
  { name: 'Comunicación', icon: <Chat />, color: '#1976d2' },
  { name: 'Liderazgo', icon: <Star />, color: '#1976d2' },
  { name: 'Trabajo en equipo', icon: <Group />, color: '#1976d2' },
  { name: 'Adaptabilidad', icon: <AutoAwesome />, color: '#1976d2' },
  { name: 'JavaScript', icon: <Code />, color: '#f7df1e' }
];

// Proyectos
const projects = [
  {
    title: 'Desarrollo web',
    description: 'Desarrollo de aplicaciones web responsivas utilizando tecnologías modernas como React, Node.js y bases de datos.',
    technologies: ['React', 'Node.js', 'HTML/CSS', 'JavaScript'],
    icon: <Web />
  },
  {
    title: 'Aplicaciones móviles',
    description: 'Creación de aplicaciones móviles nativas y multiplataforma para iOS y Android.',
    technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin'],
    icon: <PhoneAndroid />
  },
  {
    title: 'Bases de datos',
    description: 'Diseño e implementación de bases de datos relacionales y NoSQL para aplicaciones empresariales.',
    technologies: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis'],
    icon: <Storage />
  }
];

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg" sx={{ py: 4 }}>
        {/* Header con información personal */}
        <Paper elevation={3} sx={{ p: 4, mb: 4, textAlign: 'center' }}>
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'center', gap: 3 }}>
            <Avatar
              src={personalInfo.photo}
              alt={personalInfo.photoAlt}
              sx={{ width: 150, height: 150, border: 3, borderColor: 'primary.main' }}
            />
            <Box sx={{ flex: 1 }}>
              <Typography variant="h3" component="h1" gutterBottom color="primary">
                {personalInfo.name}
              </Typography>
              <Typography variant="h6" color="text.secondary" gutterBottom>
                Desarrollador Full Stack
              </Typography>
              <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mt: 2 }}>
                <Link href={`mailto:${personalInfo.email}`} color="inherit">
                  <IconButton color="primary">
                    <Email />
                  </IconButton>
                </Link>
                <Link href={`tel:${personalInfo.phone}`} color="inherit">
                  <IconButton color="primary">
                    <Phone />
                  </IconButton>
                </Link>
                <IconButton color="primary">
                  <GitHub />
                </IconButton>
                <IconButton color="primary">
                  <LinkedIn />
                </IconButton>
              </Box>
            </Box>
          </Box>
        </Paper>

        {/* Sección de Habilidades */}
        <Typography variant="h4" component="h2" gutterBottom sx={{ mb: 3 }}>
          Habilidades
        </Typography>
        <Grid container spacing={2} sx={{ mb: 4 }}>
          {skills.map((skill, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card sx={{ height: '100%', textAlign: 'center' }}>
                <CardContent>
                  <Box sx={{ color: skill.color, mb: 1 }}>
                    {skill.icon}
                  </Box>
                  <Typography variant="h6" component="h3">
                    {skill.name}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Divider sx={{ my: 4 }} />

        {/* Sección de Proyectos */}
        <Typography variant="h4" component="h2" gutterBottom sx={{ mb: 3 }}>
          Proyectos
        </Typography>
        <Grid container spacing={3}>
          {projects.map((project, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flexGrow: 1 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Box sx={{ color: 'primary.main', mr: 1 }}>
                      {project.icon}
                    </Box>
                    <Typography variant="h5" component="h3" color="primary">
                      {project.title}
                    </Typography>
                  </Box>
                  <Typography variant="body1" color="text.secondary" paragraph>
                    {project.description}
                  </Typography>
                  <Box sx={{ mb: 2 }}>
                    {project.technologies.map((tech, techIndex) => (
                      <Chip
                        key={techIndex}
                        label={tech}
                        size="small"
                        sx={{ mr: 1, mb: 1 }}
                        color="primary"
                        variant="outlined"
                      />
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </ThemeProvider>
  );
}

export default App;
