import { FAB, List, Text } from 'react-native-paper';
import { FlatList, StyleSheet, View } from 'react-native';
import React, { ReactElement, useState } from 'react';

import Header from '../shared/NinjaHeader';
import { RootStackNavigationProps } from '../navigation/RootStackNavigator';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  background-color: transparent;
`;

const Content = styled.View`
  flex: 1;
  background-color: #fff;
  padding: 20px 10px 20px 10px;
`;

const StyledText = styled.Text`
  font-size: 16px;
  color: blue;
`;

interface Props {
  navigation: RootStackNavigationProps<'NormalNote'>;
}

function NormalNote(props: Props): ReactElement {
  const navigation = props.navigation;

  const [notes, setNotes] = useState([]);

  const addNotes = (note) => {
    note.id = notes.length + 1;
    setNotes([...notes, note]);
  };

  return (
    <Container>
      <Header title="Simple Note - normal method" />
      <Content>
        {notes.length === 0 ? (
          <View
            style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}
          >
            <StyledText>You do not have any Notes</StyledText>
          </View>
        ) : (
          <FlatList
            data={notes}
            renderItem={({ item }) => (
              <List.Item
                title={item.noteTitle}
                desc={item.noteDesc}
                descNumberOfLines={1}
                titleStyle={{ fontSize: 20 }}
              />
            )}
            keyExtractor={(item) => item.id.toString()}
          />
        )}
        <FAB
          style={{
            backgroundColor: '#219653',
            position: 'absolute',
            margin: 20,
            right: 0,
            bottom: 10,
          }}
          small
          label="Add a new Note"
          onPress={() => navigation.navigate('AddNotes', { addNotes })}
        />
      </Content>
    </Container>
  );
}

export default NormalNote;
