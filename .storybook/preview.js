import { addDecorator } from '@storybook/react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from '../src/styles/global';
import theme from '../src/styles/theme'

const Wrapper = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    {children}
  </ThemeProvider>
);

addDecorator((storyFn) => <Wrapper>{storyFn()}</Wrapper>);

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  backgrounds: {
    default: 'Light',
    values: [
      {
        name: 'Light',
        value: theme.colors.grey50,
      },
      {
        name: 'Dark',
        value: theme.colors.black,
      },
    ],
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  layout: 'fullscreen',
  viewport: {
    viewports: {
      mobile: {
        name: 'Mobile (Moto G4)',
        styles: {
          width: '360px',
          height: '640px',
        },
        type: 'mobile',
      },
      tablet: {
        name: 'Tablet (iPad)',
        styles: {
          width: '768px',
          height: '1024px',
        },
        type: 'tablet',
      },
      laptop: {
        name: 'Laptop (MacBook Pro 13″)',
        styles: {
          width: '1440px',
          height: '900px',
        },
        type: 'desktop',
      },
      desktop: {
        name: 'Desktop (Full HD)',
        styles: {
          width: '1920px',
          height: '1080px',
        },
        type: 'desktop',
      },
    },
  },
};
