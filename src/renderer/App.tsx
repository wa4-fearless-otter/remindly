import * as React from 'react';
import styled from '@xstyled/styled-components';
import { Button, Flex, Input } from './shared/components';

const Centerer = styled(Flex)`
  justify-content: center;
  height: 100vh;
  background-color: greyLightest;
`;

const Container = styled(Flex)`
  flex-direction: column;
  max-width: 11;
  width: 100%;
  margin: 0 6;
  padding-top: 6;
`;

export default ({ ...props }) => (
  <Centerer {...props}>
    <Container>
      <Input mb="6" placeholder="test" />
      <Input variant="primary" mb="6" placeholder="test" />
      <Button variant="primary">Add reminder</Button>
    </Container>
  </Centerer>
);
