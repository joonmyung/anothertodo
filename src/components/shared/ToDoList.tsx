import React, { ReactChildren, ReactElement } from 'react';

import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  background-color: transparent;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

interface Props {
  children?: ReactChildren;
}

function ToDoList(props: Props): ReactElement {
  return (
    <Container>
      <styled.Text>Hello I am To Do</styled.Text>
    </Container>
  );
}

export default ToDoList;
