import { Theme } from '../models'

const colorOption = {
  darkRed: 'rgb(122, 23, 36)',
  offOrange: 'rgb(253, 193, 95)'
}

const theme: Theme = {
  fonts: {
    main: 'Montserrat'
  }, 
  colors: {
    black: '#000',
    white: '#fff',
    primary: colorOption.darkRed,
    secondary: colorOption.offOrange
  },
  zIndex: {
    low: 0,
    medium: 100,
    high: 1000
  },
  shadows: {
    elevation1: '0px 0px 8px -5px rgba(122, 23, 36,0.1)',
    elevation2: '0px 3px 16px -11px rgba(112,112,112,0.86)',
    elevation3: '-1px 5px 14px 1px rgba(0,0,0,0.2)',
    elevation4: '0px 3px 30px -11px rgba(112,112,112,0.2)'
  },
  breakpoints: {
    xs: '(max-width: 400px)',
    s: '(max-width: 650px)',
    sl: '(max-width: 800px)',
    m: '(max-width: 1080px)',
    l: '(max-width: 1300px)',
    xl: '(max-width: 1500px)'
  },
}

export default theme
