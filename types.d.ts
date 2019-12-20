declare module '*.png' {
  const value: string;

  export default value;
}

declare module '*.ico' {
  const value: string;

  export default value;
}

declare module '@xstyled/styled-components' {
  import styled, { DefaultTheme, StyledComponent, ThemedStyledFunction } from 'styled-components';

  type BoxProps = {
    variant?: string;
    justifyContent?: 'flex-start' | 'center' | 'flex-end' | 'space-around' | 'space-between';
  };

  const xStyled: typeof styled & {
    box: ThemedStyledFunction<'div', any, BoxProps, never>;
    buttonBox: ThemedStyledFunction<'button', any, BoxProps, never>;
    inputBox: ThemedStyledFunction<'input', any, BoxProps, never>;
  };
  const Box: StyledComponent<'div', any, BoxProps, never>;
  const ThemeProvider: any;
  const css: any;

  export default xStyled;
  export * from 'styled-components';
  export { Box };
}
