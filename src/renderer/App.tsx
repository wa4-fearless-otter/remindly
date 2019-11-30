import * as React from 'react';
import styled from '@xstyled/styled-components';

const Add = styled.button``;

export default ({ ...props }) => (
  <div {...props}>
    <Add>Add reminder</Add>
  </div>
);
