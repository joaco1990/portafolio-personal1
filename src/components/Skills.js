import React from 'react';
import {
  Typography,
  Grid2 as Grid,
  Card,
  CardContent,
  Box,
  Chip
} from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Skills = ({ skills }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

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
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <Grid container spacing={2} sx={{ mb: 4 }}>
          {skills.map((skill, index) => (
            <Grid xs={12} sm={6} md={4} key={index}>
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
                        color="primary" 
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
    </Box>
  );
};

export default Skills; 