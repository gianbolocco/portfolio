import { createTheme } from '@mui/material/styles';

const getTheme = (mode) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
        // Light Mode
        primary: {
          main: '#000000',
        },
        secondary: {
          main: '#666666',
        },
        accent: {
          main: '#646cff', // Electric Blue
        },
        background: {
          default: '#f5f5f5',
          paper: '#ffffff',
        },
        text: {
          primary: '#1a1a1a',
          secondary: '#666666',
        },
      }
      : {
        // Dark Mode
        primary: {
          main: '#ffffff',
        },
        secondary: {
          main: '#b0b0b0',
        },
        accent: {
          main: '#646cff', // Electric Blue
        },
        background: {
          default: '#0a0a0a',
          paper: '#121212',
        },
        text: {
          primary: '#ffffff',
          secondary: '#a0a0a0',
        },
      }),
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: '3.5rem',
      letterSpacing: '-0.02em',
    },
    h2: {
      fontWeight: 600,
      fontSize: '2.5rem',
      letterSpacing: '-0.01em',
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: mode === 'dark' ? 'rgba(10, 10, 10, 0.7)' : 'rgba(255, 255, 255, 0.7)',
          backdropFilter: 'blur(10px)',
          boxShadow: 'none',
          borderBottom: `1px solid ${mode === 'dark' ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)'}`,
          color: mode === 'dark' ? '#fff' : '#000',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          padding: '10px 24px',
        },
        contained: {
          boxShadow: 'none',
          '&:hover': {
            boxShadow: 'none',
            backgroundColor: mode === 'dark' ? '#e0e0e0' : '#333',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '16px',
          backgroundImage: 'none',
          backgroundColor: mode === 'dark' ? '#121212' : '#ffffff',
          border: `1px solid ${mode === 'dark' ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)'}`,
          transition: 'transform 0.3s ease-in-out, border-color 0.3s ease, box-shadow 0.3s ease',
          '&:hover': {
            transform: 'translateY(-5px)',
            borderColor: mode === 'dark' ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.1)',
            boxShadow: mode === 'dark' ? 'none' : '0 10px 30px rgba(0,0,0,0.05)',
          },
        },
      },
    },
  },
});

export default getTheme;
