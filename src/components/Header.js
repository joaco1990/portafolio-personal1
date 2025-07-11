import React from 'react';
import {
  Paper,
  Typography,
  Box,
  Avatar,
  IconButton,
  Link,
  Switch,
  FormControlLabel,
  Chip
} from '@mui/material';
import {
  Email,
  Phone,
  GitHub,
  LinkedIn,
  DarkMode,
  LightMode
} from '@mui/icons-material';
import { motion } from 'framer-motion';

const Header = ({ personalInfo, isDarkMode, onToggleTheme }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <Paper elevation={3} sx={{ p: 4, mb: 4, textAlign: 'center', position: 'relative' }}>
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'center', gap: 3 }}>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Avatar
              src={personalInfo.photo}
              alt={personalInfo.photoAlt}
              sx={{ width: 150, height: 150, border: 3, borderColor: 'primary.main' }}
            />
          </motion.div>
          <Box sx={{ flex: 1 }}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Typography variant="h3" component="h1" gutterBottom color="primary">
                {personalInfo.name}
              </Typography>
              <Typography variant="h5" color="text.secondary" gutterBottom sx={{ mb: 2 }}>
                {personalInfo.title}
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 3, maxWidth: 600, mx: 'auto' }}>
                {personalInfo.description}
              </Typography>
              
              <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1, mb: 2, flexWrap: 'wrap' }}>
                <Chip label="React.js" color="primary" variant="outlined" size="small" />
                <Chip label="Node.js" color="primary" variant="outlined" size="small" />
                <Chip label="Material UI" color="primary" variant="outlined" size="small" />
                <Chip label="JavaScript" color="primary" variant="outlined" size="small" />
                <Chip label="Git" color="primary" variant="outlined" size="small" />
              </Box>
            </motion.div>
            
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mt: 2 }}>
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Link href={`mailto:${personalInfo.email}`} color="inherit">
                  <IconButton color="primary" title="Enviar email">
                    <Email />
                  </IconButton>
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Link href={`tel:${personalInfo.phone}`} color="inherit">
                  <IconButton color="primary" title="Llamar">
                    <Phone />
                  </IconButton>
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Link href="https://github.com/joacoguz" target="_blank" rel="noopener noreferrer" color="inherit">
                  <IconButton color="primary" title="GitHub">
                    <GitHub />
                  </IconButton>
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Link href="https://linkedin.com/in/joacoguz" target="_blank" rel="noopener noreferrer" color="inherit">
                  <IconButton color="primary" title="LinkedIn">
                    <LinkedIn />
                  </IconButton>
                </Link>
              </motion.div>
            </Box>
          </Box>
        </Box>
        
        <Box sx={{ position: 'absolute', top: 16, right: 16 }}>
          <FormControlLabel
            control={
              <Switch
                checked={isDarkMode}
                onChange={onToggleTheme}
                icon={<LightMode />}
                checkedIcon={<DarkMode />}
              />
            }
            label={isDarkMode ? "Modo Oscuro" : "Modo Claro"}
          />
        </Box>
      </Paper>
    </motion.div>
  );
};

export default Header; 