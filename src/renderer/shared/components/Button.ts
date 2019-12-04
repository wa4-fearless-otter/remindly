import styled, { css } from '@xstyled/styled-components';
import { variant } from '@xstyled/system';

const buttonVariant = variant({
  default: 'default',
  variants: {
    default: css`
      color: text;
      background-color: white;
      border-color: greyLighter;
      border-width: 1;
      border-style: solid;

      &:hover {
        border-color: greyLight;
      }
    `,
    primary: css`
      color: white;
      background-color: orange;

      &:hover {
        background-color: orange-darken;
      }
    `,
  },
});

export default styled.buttonBox`
  cursor: pointer;
  padding: 4;
  border-radius: 3;
  border: none;
  outline: none;

  ${buttonVariant}
`;
