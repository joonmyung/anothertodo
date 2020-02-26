import React, { ReactChildren, ReactElement } from 'react';

import { TouchableOpacity } from 'react-native-gesture-handler';
import { screenWidth } from '../../utils/Styles';
import styled from 'styled-components/native';

const Container = styled.View`
  width: ${screenWidth - 50};
  border-bottom-color: #bbb;
  border-bottom-width: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: transparent;
`;

const StyledView = styled.View`
  flex-direction: row;
`;

const Column = styled.View`
  flex-direction: row;
  align-items: center;
  width: ${screenWidth / 2};
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

const StyledInput = styled.TextInput`
  width: ${screenWidth / 2};
  margin: 10px 0px;
  padding-bottom: 5px;
`;
interface Props {
  children?: ReactChildren;
  text?: string;
}

function ToDoList(props: Props): ReactElement {
  const [isEditing, setIsEditing] = React.useState(false);
  const [isCompleted, setIsCompleted] = React.useState(false);

  const _toggleComplete = () => {
    setIsCompleted(!isCompleted);
  };

  const text = props.text;

  return (
    <Container>
      <Column>
        <TouchableOpacity onPress={_toggleComplete}>
          <StyledCircle
            style={{ borderColor: isCompleted ? '#bbb' : '#F23657' }}
          ></StyledCircle>
        </TouchableOpacity>
        {isCompleted ? (
          <CompletedText>{text}</CompletedText>
        ) : (
          <UncompletedText>{text}</UncompletedText>
        )}
      </Column>
      <StyledView>
        <StyledText>🗑️</StyledText>
      </StyledView>
    </Container>
  );
}

export default ToDoList;
