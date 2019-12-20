import * as React from 'react';
import styled from '@xstyled/styled-components';
import { Button, Flex, Input } from './shared/components';

const Container = styled(Flex)`
  flex-direction: column;
  max-width: 11;
  width: 100%;
  margin: 0 6;
  padding-top: 6;
`;

export default ({ ...props }) => (
  <Flex {...props} justifyContent="center">
    <Container>
      <Input mb="6" placeholder="test" />
      <Input variant="primary" mb="6" placeholder="test" />
      <Button>Add reminder</Button>
      <Button variant="primary">Add reminder</Button>
    </Container>
  </Flex>
);
