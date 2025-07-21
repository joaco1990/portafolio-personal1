import React, { useState } from 'react';
import {
  Typography,
  Grid,
  Card,
  CardContent,
  Box,
  Chip,
  ButtonGroup,
  Button
} from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Skills = ({ skills }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  // Obtener categorías únicas
  const categories = ['all', ...new Set(skills.map(skill => skill.category))];
  
  // Filtrar habilidades por categoría
  const filteredSkills = selectedCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === selectedCategory);

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
    }
  };

  const getCategoryLabel = (category) => {
    const labels = {
      'all': 'Todas',
      'soft': 'Habilidades Blandas',
      'frontend': 'Frontend',
      'backend': 'Backend',
      'tools': 'Herramientas',
      'other': 'Otros'
    };
    return labels[category] || category;
  };

  const getLevelColor = (level) => {
    const colors = {
      'Básico': 'default',
      'Intermedio': 'primary',
      'Avanzado': 'success'
    };
    return colors[level] || 'default';
  };

  return (
    <Box>
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Typography variant="h4" component="h2" gutterBottom sx={{ mb: 3 }}>
          Habilidades
        </Typography>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <Box sx={{ mb: 4, display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 1 }}>
          <ButtonGroup variant="outlined" size="small">
            {categories.map(category => (
              <Button
                key={category}
                onClick={() => setSelectedCategory(category)}
                variant={selectedCategory === category ? 'contained' : 'outlined'}
              >
                {getCategoryLabel(category)}
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
        <Grid container spacing={2} sx={{ mb: 4 }}>
          {filteredSkills.map((skill, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <motion.div variants={itemVariants}>
                <Card 
                  sx={{ 
                    height: '100%', 
                    textAlign: 'center',
                    transition: 'transform 0.2s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: 3
                    }
                  }}
                >
                  <CardContent>
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Box sx={{ color: skill.color, mb: 1, fontSize: '2rem' }}>
                        {skill.icon}
                      </Box>
                    </motion.div>
                    <Typography variant="h6" component="h3" gutterBottom>
                      {skill.name}
                    </Typography>
                    {skill.level && (
                      <Chip 
                        label={`Nivel: ${skill.level}`} 
                        size="small" 
                        color={getLevelColor(skill.level)}
                        variant="outlined"
                        sx={{ mb: 1 }}
                      />
                    )}
                    {skill.category && skill.category !== 'other' && (
                      <Chip 
                        label={getCategoryLabel(skill.category)} 
                        size="small" 
                        color="secondary"
                        variant="outlined"
                      />
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </motion.div>

      {filteredSkills.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Box sx={{ textAlign: 'center', py: 4 }}>
            <Typography variant="h6" color="text.secondary">
              No hay habilidades en esta categoría
            </Typography>
          </Box>
        </motion.div>
      )}
    </Box>
  );
};

export default Skills; 