import React from 'react';
import { CssBaseline, Box, Typography } from '@mui/material';
import { ColorModeProvider } from './ColorModeContext';
import { LanguageProvider, useLanguage } from './LanguageContext';
import { t } from './translations';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';

import SocialFloat from './components/SocialFloat';

function AppContent() {
  const { language } = useLanguage();

  return (
    <Box sx={{ bgcolor: 'background.default', minHeight: '100vh', transition: 'background-color 0.3s ease' }}>
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />

      <SocialFloat />
      <Box component="footer" sx={{ py: 3, textAlign: 'center', opacity: 0.7 }}>
        <Typography variant="body2">
          © {new Date().getFullYear()} Gianlucca Bolocco. {t(language, 'footer.derechos')}
        </Typography>
      </Box>
    </Box>
  );
}

function App() {
  return (
    <ColorModeProvider>
      <LanguageProvider>
        <CssBaseline />
        <AppContent />
      </LanguageProvider>
    </ColorModeProvider>
  );
}

export default App;
