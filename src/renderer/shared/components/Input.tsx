import * as React from 'react';
import styled from '@xstyled/styled-components';
import inputStyles from './shared/inputStyles';

type Props = UnkownProps & {
  mask?: (value: string) => string;
};

const Input = styled.inputBox`
  ${inputStyles}
`;

export default ({ mask, ...props }: Props) => {
  const [value, setValue] = React.useState('');

  return <Input value={value} onChange={({ target }) => mask && setValue(mask(target.value))} {...props} />;
};
