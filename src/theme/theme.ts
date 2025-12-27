import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#A855F7', // Purple
      light: '#D8B4FE',
      dark: '#7E22CE',
    },
    secondary: {
      main: '#2563EB', // Blue
      light: '#60A5FA',
      dark: '#1D4ED8',
    },
    background: {
      default: '#FAFAFA',
      paper: '#FFFFFF',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '3rem',
      fontWeight: 700,
      '@media (max-width: 768px)': {
        fontSize: '2rem',
      },
    },
    h2: {
      fontSize: '2.25rem',
      fontWeight: 700,
      '@media (max-width: 768px)': {
        fontSize: '1.875rem',
      },
    },
    h3: {
      fontSize: '1.875rem',
      fontWeight: 600,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.6,
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 600,
          borderRadius: 8,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
        },
      },
    },
  },
});
