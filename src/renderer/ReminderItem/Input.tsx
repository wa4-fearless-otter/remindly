import * as React from 'react';
import { Input, Label, Span } from '@renderer/shared/components';

type Props = UnkownProps & {
  text?: string;
  placeholder?: string;
  mask?: (value: string) => string;
};

export default ({ text, placeholder, mask, ...props }: Props) => (
  <Label {...props} display="flex" flexDirection="column">
    <Span>{text}</Span>
    <Input placeholder={placeholder} mask={mask} />
  </Label>
);
