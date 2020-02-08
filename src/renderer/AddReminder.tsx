import * as React from 'react';
import { Button } from '@renderer/shared/components';

export default ({ ...props }) => (
  <Button variant="primary" {...props}>
    Add reminder
  </Button>
);
