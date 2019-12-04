import * as React from 'react';
import { Button } from './shared/components';

export default ({ ...props }) => (
  <div {...props}>
    <Button variant="primary">Add reminder</Button>
  </div>
);
