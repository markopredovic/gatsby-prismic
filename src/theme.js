// import './css/fonts.css'
import { red } from '@material-ui/core/colors'
import { createMuiTheme } from '@material-ui/core/styles'
import { grey } from '@material-ui/core/colors'

const values = {
  xs: 0,
  sm: 600,
  md: 960,
  lg: 1280,
  xl: 1920,
}
// A custom theme for this app
const theme = createMuiTheme({
  breakpoints: {
    keys: ['xs', 'sm', 'md', 'lg', 'xl'],
    up: key => `@media (min-width:${values[key]}px)`,
  },
  palette: {
    primary: {
      main: '#3a88ec',
      dark: '#303669',
      light: '#78c2ff',
    },
    secondary: {
      main: '#ff3e81',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
  },
  typography: {
    fontFamily: 'Open Sans, Roboto, sans serif',
    htmlFontSize: 10,
    body1: {
      fontSize: 15,
    },
  },
  props: {
    MuiButtonBase: {
      disableRipple: true,
    },
    MuiButton: {},
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        html: {
          fontSize: '62.5%',
          WebkitFontSmoothing: 'auto',
        },
      },
    },
    MuiButton: {
      root: {
        padding: '0 40px',
        height: '51px',
        lineHeight: '51px',
        borderRadius: '30px',
        '@media (min-width: 960px)': {
          height: '55px',
          lineHeight: '55px',
        },
        '@media (min-width: 1280px)': {
          height: '60px',
          lineHeight: '60px',
        },
      },
      text: {
        padding: '0 4rem',
      },
      contained: {
        padding: '0 40px',
        fontSize: '1.8rem',
        boxShadow: 'none',
        '@media (min-width: 960px)': {
          fontSize: '2rem',
        },
        '@media (min-width: 1280px)': {
          fontSize: '2.2rem',
        },
      },
      containedPrimary: {
        color: '#1E0E0E',
        '&:hover': {
          color: '#BAB3B3',
        },
      },
      containedSecondary: {
        color: '#1E1212',
        '&:hover': {
          color: '#EEEEEE',
        },
      },
      label: {
        fontSize: '1.8rem',
        fontWeight: '600',
        textTransform: 'none',
        '@media (min-width: 960px)': {
          fontSize: '2rem',
        },
        '@media (min-width: 1280px)': {
          fontSize: '2.2rem',
        },
      },
    },
    MuiTypography: {
      body1: {
        fontSize: '1.8rem',
        '@media (min-width: 600px)': {
          fontSize: '2rem',
        },
        '@media (min-width: 960px)': {
          fontSize: '2.2rem',
        },
        '@media (min-width: 1280px)': {
          fontSize: '2.4rem',
        },
      },
      body2: {
        fontSize: '1.6rem',
        color: grey[400],
        '@media (min-width: 960px)': {
          fontSize: '1.8rem',
        },
        '@media (min-width: 1280px)': {
          fontSize: '2rem',
        },
      },
      subtitle1: {
        fontSize: '2.4rem',
        '@media (min-width: 960px)': {
          fontSize: '2.6rem',
        },
        '@media (min-width: 1280px)': {
          fontSize: '2.8rem',
        },
      },
    },
    MuiPaper: {
      elevation1: {
        boxShadow: 'none',
      },
    },
    MuiAccordion: {},
  },
})

export default theme
