import * as React from 'react';
import { Button, Icon } from '@renderer/shared/components';

export default ({ ...props }) => (
  <Button {...props}>
    <Icon.MoreVertical />
  </Button>
);
