type UnkownProps = {
  [x: string]: unknown;
};

declare module '*.png' {
  const value: string;

  export default value;
}

declare module '*.ico' {
  const value: string;

  export default value;
}

declare module '@xstyled/styled-components' {
  import styled, { DefaultTheme, StyledComponent, ThemedStyledFunction, StyledComponentProps } from 'styled-components';

  interface Breakpoints {
    xs: unknown;
    sm: unknown;
    md: unknown;
    lg: unknown;
    xl: unknown;
  }

  type BreakpointObject<ArgType> = {
    [Key in keyof Breakpoints]?: ArgType;
  };

  type WithBreakpointArgs<Props> = {
    [Key in keyof Props]?: Props[Key] | BreakpointObject<Props[Key]>;
  };

  interface BoxPropsBase {
    variant: string;
    background: number | string;
    backgroundColor: number | string;
    backgroundImage: number | string;
    backgroundSize: number | string;
    backgroundPosition: number | string;
    backgroundRepeat: number | string;
    opacity: number | string;
    overflow: number | string;
    transition: number | string;
    border: number | string;
    borderTop: number | string;
    borderTopColor: number | string;
    borderRight: number | string;
    borderRightColor: number | string;
    borderBottom: number | string;
    borderBottomColor: number | string;
    borderLeft: number | string;
    borderLeftColor: number | string;
    borderColor: number | string;
    borderWidth: number | string;
    borderStyle: number | string;
    borderRadius: number | string;
    display: number | string;
    alignItems: number | string;
    alignContent: number | string;
    justifyContent: number | string;
    justifyItems: number | string;
    flexWrap: number | string;
    flexBasis: number | string;
    flexDirection: number | string;
    flex: number | string;
    justifySelf: number | string;
    alignSelf: number | string;
    order: number | string;
    gridGap: number | string;
    gridColumnGap: number | string;
    gridRowGap: number | string;
    gridColumn: number | string;
    gridRow: number | string;
    gridAutoFlow: number | string;
    gridAutoColumns: number | string;
    gridAutoRows: number | string;
    gridTemplateColumns: number | string;
    gridTemplateRows: number | string;
    gridTemplateAreas: number | string;
    gridArea: number | string;
    width: number | string;
    height: number | string;
    maxWidth: number | string;
    maxHeight: number | string;
    minWidth: number | string;
    minHeight: number | string;
    size: number | string;
    verticalAlign: number | string;
    position: number | string;
    zIndex: number | string;
    top: number | string;
    right: number | string;
    bottom: number | string;
    left: number | string;
    boxShadow: number | string;
    textShadow: number | string;
    margin: number | string;
    m: number | string;
    marginTop: number | string;
    mt: number | string;
    marginRight: number | string;
    mr: number | string;
    marginBottom: number | string;
    mb: number | string;
    marginLeft: number | string;
    ml: number | string;
    mx: number | string;
    my: number | string;
    padding: number | string;
    p: number | string;
    paddingTop: number | string;
    pt: number | string;
    paddingRight: number | string;
    pr: number | string;
    paddingBottom: number | string;
    pb: number | string;
    paddingLeft: number | string;
    pl: number | string;
    px: number | string;
    py: number | string;
    fontFamily: number | string;
    fontSize: number | string;
    lineHeight: number | string;
    fontWeight: number | string;
    textAlign: number | string;
    letterSpacing: number | string;
    color: number | string;
    textTransform: number | string;
    row: number | string;
    col: number | string;
  }

  type BoxProps = WithBreakpointArgs<BoxPropsBase>;
  type XStyledFunction<Type extends keyof JSX.IntrinsicElements | React.ComponentType> = ThemedStyledFunction<
    Type,
    DefaultTheme,
    BoxProps
  >;
  type XStyledComponent<Type extends keyof JSX.IntrinsicElements | React.ComponentType> = StyledComponent<
    Type,
    DefaultTheme,
    BoxProps
  >;

  const xStyled: typeof styled & {
    box: XStyledFunction<'div'>;
    buttonBox: XStyledFunction<'button'>;
    inputBox: XStyledFunction<'input'>;
  };

  export default xStyled;
  export * from 'styled-components';
  export const Box: XStyledComponent<'div'>;
}
