import styled, { css } from '@xstyled/styled-components';
import { variant } from '@xstyled/system';
import inputStyles from './shared/inputStyles';

export default styled.buttonBox`
  ${inputStyles}

  cursor: pointer;

  ${variant({
    default: 'default',
    variants: {
      default: '',
      primary: css`
        border: none;
        color: white;
        background-color: orange;

        &:hover {
          background-color: orange-darken;
        }
      `,
    },
  })}
`;
