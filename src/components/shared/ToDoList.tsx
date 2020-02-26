import React, { ReactChildren, ReactElement } from 'react';

import { TouchableOpacity } from 'react-native-gesture-handler';
import { screenWidth } from '../../utils/Styles';
import styled from 'styled-components/native';

const Container = styled.View`
  width: ${screenWidth - 50};
  align-items: center;
  border-bottom-color: #bbb;
  border-bottom-width: 1;
  background-color: transparent;
  flex-direction: row;
`;

const StyledText = styled.Text`
  font-size: 20;
  font-weight: 600;
  margin: 30px 0px;
`;

const CompletedText = styled(StyledText)`
  color: #bbb;
  text-decoration-line: line-through;
`;

const UncompletedText = styled(StyledText)`
  color: #353839;
`;

const StyledCircle = styled.View`
  width: 30;
  height: 30;
  border-radius: 15;
  margin-right: 20;
  border-width: 3;
`;
interface Props {
  children?: ReactChildren;
}

function ToDoList(props: Props): ReactElement {
  const [isEditing, setIsEditing] = React.useState(false);
  const [isCompleted, setIsCompleted] = React.useState(false);

  const _toggleComplete = () => {
    setIsCompleted(!isCompleted);
  };

  return (
    <Container>
      <TouchableOpacity onPress={_toggleComplete}>
        <StyledCircle
          style={{ borderColor: isCompleted ? '#bbb' : '#F23657' }}
        ></StyledCircle>
      </TouchableOpacity>
      {isCompleted ? (
        <CompletedText>{'I am a Done To Do'}</CompletedText>
      ) : (
        <UncompletedText>{'I am a To Do'}</UncompletedText>
      )}
    </Container>
  );
}

export default ToDoList;
