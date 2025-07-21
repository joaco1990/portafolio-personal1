import React, { useState } from 'react';
import {
  Typography,
  Grid,
  Card,
  CardContent,
  Box,
  Chip,
  Button,
  ButtonGroup
} from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Projects = ({ projects }) => {
  const [filter, setFilter] = useState('all');
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const allTechnologies = [...new Set(projects.flatMap(project => project.technologies))];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.technologies.includes(filter));

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.3
      }
    }
  };

  const getStatusColor = (status) => {
    const colors = {
      'Completado': 'success',
      'En Desarrollo': 'warning',
      'Planificado': 'info'
    };
    return colors[status] || 'default';
  };

  const getStatusIcon = (status) => {
    const icons = {
      'Completado': '✅',
      'En Desarrollo': '🔄',
      'Planificado': '📋'
    };
    return icons[status] || '📋';
  };

  return (
    <Box>
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Typography variant="h4" component="h2" gutterBottom sx={{ mb: 3 }}>
          Proyectos
        </Typography>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <Box sx={{ mb: 3, display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 1 }}>
          <ButtonGroup variant="outlined" size="small">
            <Button
              onClick={() => setFilter('all')}
              variant={filter === 'all' ? 'contained' : 'outlined'}
            >
              Todos
            </Button>
            {allTechnologies.map(tech => (
              <Button
                key={tech}
                onClick={() => setFilter(tech)}
                variant={filter === tech ? 'contained' : 'outlined'}
              >
                {tech}
              </Button>
            ))}
          </ButtonGroup>
        </Box>
      </motion.div>

      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <AnimatePresence mode="wait">
          <Grid container spacing={3} key={filter}>
            {filteredProjects.map((project, index) => (
              <Grid item xs={12} md={6} lg={4} key={project.title}>
                <motion.div
                  variants={itemVariants}
                  layout
                >
                  <Card 
                    sx={{ 
                      height: '100%', 
                      display: 'flex', 
                      flexDirection: 'column',
                      transition: 'all 0.3s ease-in-out',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: 4
                      }
                    }}
                  >
                    <CardContent sx={{ flexGrow: 1 }}>
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                          <Box sx={{ color: 'primary.main', mr: 1, fontSize: '1.5rem' }}>
                            {project.icon}
                          </Box>
                          <Typography variant="h5" component="h3" color="primary">
                            {project.title}
                          </Typography>
                        </Box>
                      </motion.div>
                      
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
                            onClick={() => setFilter(tech)}
                            style={{ cursor: 'pointer' }}
                          />
                        ))}
                      </Box>

                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <Chip
                          icon={<span>{getStatusIcon(project.status)}</span>}
                          label={project.status}
                          color={getStatusColor(project.status)}
                          variant="filled"
                          size="small"
                        />
                      </Box>
                      
                      {project.link && (
                        <motion.div whileHover={{ scale: 1.05 }}>
                          <Button 
                            variant="contained" 
                            color="primary" 
                            size="small"
                            fullWidth
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Ver Proyecto
                          </Button>
                        </motion.div>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </AnimatePresence>
      </motion.div>

      {filteredProjects.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Box sx={{ textAlign: 'center', py: 4 }}>
            <Typography variant="h6" color="text.secondary">
              No hay proyectos con esta tecnología
            </Typography>
          </Box>
        </motion.div>
      )}
    </Box>
  );
};

export default Projects; 