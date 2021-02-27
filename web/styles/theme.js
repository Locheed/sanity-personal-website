import { extendTheme } from '@chakra-ui/react'

const styles = {
  global: {
    body: {
      fontSize: '18px',
    },
  },
}
const colors = {
  brand: {
    900: '##141F31',
    700: '#E96A63',
    600: '#959599',
    500: '#F9F8FE',
  },
}

const fonts = {
  heading: '"Abril Fatface", sans-serif',
  body: 'Lato, sans-serif',
}

const theme = extendTheme({ colors, fonts, styles })

export default theme
