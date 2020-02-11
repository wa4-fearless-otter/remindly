import * as React from 'react';
import { Input, Label, Span } from '@renderer/shared/components';

type Props = UnkownProps & {
  text?: string;
  placeholder?: string;
  mask?: (value: string) => string;
  min?: number;
  max?: number;
};

export default ({ text, placeholder, mask, min, max, ...props }: Props) => (
  <Label {...props} display="flex" flexDirection="column">
    <Span>{text}</Span>
    <Input
      width="7"
      placeholder={placeholder ?? '*'}
      mask={
        mask ??
        (value => {
          const number = Number(value);

          if (Number.isNaN(number)) return '';
          if (min !== undefined && number < min) return min.toString();
          if (max !== undefined && number > max) return max.toString();

          return value;
        })
      }
    />
  </Label>
);
