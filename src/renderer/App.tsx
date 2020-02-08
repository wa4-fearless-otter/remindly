import * as React from 'react';
import styled from '@xstyled/styled-components';
import { Flex } from '@renderer/shared/components';
import ReminderItem from './ReminderItem';
import AddReminder from './AddReminder';

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
      <ReminderItem mb="6" />
      <AddReminder />
    </Container>
  </Centerer>
);
