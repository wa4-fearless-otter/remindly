import * as React from 'react';
import styled, { ThemeProvider } from '@xstyled/styled-components';
import { rpxTransformers } from '@xstyled/system';
import { darken } from 'polished';
import colors from './colors';

const theme = {
  colors,
  space: ['0', '1rpx', '2rpx', '4rpx', '8rpx', '16rpx', '32rpx'],
  sizes: ['0', '1rpx', '2rpx', '4rpx', '8rpx', '16rpx', '32rpx', '64rpx', '128rpx', '256rpx', '512rpx', '1024rpx'],
  borderWidths: ['0', '1rpx', '2rpx', '4rpx'],
  borderStyles: { solid: 'solid' },
  radii: ['0', '1rpx', '2rpx', '4rpx'],
  fonts: {
    default:
      // eslint-disable-next-line max-len
      'BlinkMacSystemFont, -apple-system, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", "Helvetica", "Arial", sans-serif',
  },
  transformers: {
    ...rpxTransformers,
    color: (value: string) => {
      const suffix = '-darken';

      if (!value.endsWith(suffix)) return value;

      const key = value.slice(0, -suffix.length) as keyof typeof colors;

      return darken(0.05, colors[key]);
    },
  },
};

const GlobalStyles = styled.box`
  * {
    box-sizing: border-box;
    font-family: default;
    color: text;
  }
`;

export default ({ children, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <ThemeProvider {...props} theme={theme}>
    <GlobalStyles>{children}</GlobalStyles>
  </ThemeProvider>
);
