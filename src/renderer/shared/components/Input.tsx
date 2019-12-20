import * as React from 'react';
import styled from '@xstyled/styled-components';
import TextMask from 'react-text-mask';
import inputStyles from './shared/inputStyles';

const Input = styled.inputBox`
  ${inputStyles}
`;

export default ({ ...props }) => (
  <TextMask
    showMask
    placeholderChar=" "
    guide
    keepCharPositions
    {...props}
    render={(ref, inputProps) => <Input ref={ref} {...inputProps} />}
  />
);
