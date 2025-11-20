import React from 'react';
import { CssBaseline, Box, Typography } from '@mui/material';
import { ColorModeProvider } from './ColorModeContext';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <ColorModeProvider>
      <CssBaseline />
      <Box sx={{ bgcolor: 'background.default', minHeight: '100vh', transition: 'background-color 0.3s ease' }}>
        <Header />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Box component="footer" sx={{ py: 3, textAlign: 'center', opacity: 0.7 }}>
          <Typography variant="body2">
            © {new Date().getFullYear()} Gianlucca Bolocco. Todos los derechos reservados.
          </Typography>
        </Box>
      </Box>
    </ColorModeProvider>
  );
}

export default App;
