import * as React from 'react';
import { Flex } from '@renderer/shared/components';
import Input from './Input';
import Button from './Button';

export default ({ ...props }) => (
  <Flex {...props} justifyContent="space-between">
    <Flex>
      <Input text="Minute" min={0} max={59} />
      <Input text="Hour" min={0} max={23} />
      <Input text="Dotm" min={1} max={31} />
      <Input text="Month" min={1} max={12} />
      <Input text="Dotw" min={0} max={6} />
    </Flex>
    <Button />
  </Flex>
);
