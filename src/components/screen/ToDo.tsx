import React, { ReactElement } from 'react';

import { Platform } from 'react-native';
import { RootStackNavigationProps } from '../navigation/RootStackNavigator';
import { ToDoList } from '../shared/ToDoList';
import { screenWidth } from '../../utils/Styles';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  background-color: #f23657;
  align-items: center;
`;

const StyledScrollView = styled.ScrollView`
  flex: 1;
`;

const StyledTitle = styled.Text`
  color: white;
  font-size: 30;
  margin-top: 20;
  margin-bottom: 30;
  font-weight: 400;
`;

const StyledInput = styled.TextInput`
  color: black;
  padding: 20px;
  border-bottom-color: #bbb;
  border-bottom-width: 1;
  font-size: 20;
`;

const StyledCard = styled.View`
  background-color: white;
  flex: 1;
  width: ${screenWidth - 25};
  border-top-left-radius: 10;
  border-top-right-radius: 10;
  ${Platform.select({})}
  box-shadow: -1px 0px 0px #323232;
`;

interface Props {
  navigation: RootStackNavigationProps<'default'>;
}

function ToDo(props: Props): ReactElement {
  const [newToDo, setNewToDo] = React.useState('');

  const _controlNewToDo = (text) => {
    setNewToDo(text);
  };

  const _addToDo = () => {
    // eslint-disable-next-line no-console
    console.log('add To do');
  };

  return (
    <Container>
      <StyledTitle>Another To Do</StyledTitle>
      <StyledCard>
        <StyledInput
          placeholder="Add New To Do"
          value={newToDo}
          onChangeText={_controlNewToDo}
          returnKeyType={'done'}
          autoCorrect={false}
          onSubmitEditing={_addToDo}
        />
        <StyledScrollView>
          <ToDoList />
        </StyledScrollView>
      </StyledCard>
    </Container>
  );
}

export default ToDo;
