import type { Preview } from '@storybook/nextjs-vite';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { theme } from '../src/themes';
import * as NextImage from 'next/image';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls:{
    matchers:{
      color: /(background| color)$/i,
      date: /Date$/,
    }
  }
}

export const GlobalStyle = createGlobalStyle`
html,
body,
textarea {
padding: 0;
margin: 0;
font-family: -apple-system, BlinkMacSystemFont, Segoue UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neuem sans-serif;
}
* {
box-sizing: border-box;
}
a {
text-decoration: none;
transition: .25s;
color: #000000;
}
`

//Theme적용
addDecorator((Story) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    {story()}
  </ThemeProvider>
));

//next/image 교체
const OriginalnextImage = NextImage.default;

Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: (props) => typeof props.src === 'string' ? (
    <OriginalnextImage {...props} unoptimized blurDataURL={props.src}/>
  ): (
    <OriginalnextImage {...props} unoptimized />
  )
});

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo'
    }
  },
};

export default preview;