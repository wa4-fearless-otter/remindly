declare module '*.png' {
  const value: string;

  export default value;
}

declare module '*.ico' {
  const value: string;

  export default value;
}

declare module '@xstyled/styled-components' {
  const value: any;
  const ThemeProvider: any;
  const css: any;

  export default value;
  export { ThemeProvider, css };
}
