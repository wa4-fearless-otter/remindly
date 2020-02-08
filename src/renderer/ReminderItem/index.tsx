import * as React from 'react';
import { Button, Flex, Icon } from '@renderer/shared/components';
import Input from './Input';

export default ({ ...props }) => (
  <Flex {...props}>
    <Input
      text="Minute"
      placeholder="*"
      mask={value => {
        const number = Number(value);

        if (Number.isNaN(number)) return '';
        if (number < 0) return '0';
        if (number > 59) return '59';

        return value;
      }}
    />
    <Button>
      <Icon.MoreVertical />
    </Button>
  </Flex>
);
