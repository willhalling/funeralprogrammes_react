import { red } from '@mui/material/colors'
import { createTheme, Theme } from '@mui/material/styles'
import { Open_Sans as openSans } from '@next/font/google'

export const openSansFont = openSans({
  weight: ['300', '400', '500', '600', '800', '700'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
})

// Create a theme instance.
const theme: Theme = createTheme({
  palette: {
    primary: {
      main: '#111827',
      '600': '#57534e',
      '900': '#4b5563',
      '700': '#44403c',
      '400': '#a3a3a3',
      '500': '#6b7280',
    },
    secondary: {
      main: '#991b1b',
      '800': '#991b1b',
      '700': '#b91c1c',
    },
    error: {
      main: red.A400,
    },
    common: {
      white: '#fff',
    },
  },

  typography: {
    fontFamily: openSansFont.style.fontFamily,
  },
})

export default theme
