import * as React from 'react';
import styled from '@xstyled/styled-components';
import TextMask, { MaskedInputProps } from 'react-text-mask';
import inputStyles from './shared/inputStyles';

type Props = MaskedInputProps | UnkownProps;

const Input = styled.inputBox`
  ${inputStyles}
`;

export default ({ ...props }: Props) => (
  <TextMask
    showMask
    placeholderChar=" "
    guide
    keepCharPositions
    {...props}
    render={(ref, inputProps) => <Input ref={ref} {...inputProps} />}
  />
);
