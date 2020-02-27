import { FAB, IconButton, Text, TextInput } from 'react-native-paper';
import React, { ReactElement, useState } from 'react';
import {
  RootStackNavigationProps,
  RootStackParamList,
} from '../navigation/RootStackNavigator';
import { StyleSheet, View } from 'react-native';

import Header from '../shared/NinjaHeader';
import { RouteProp } from '@react-navigation/core';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  background-color: transparent;
`;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  iconButton: {
    backgroundColor: '#219653',
    position: 'absolute',
    right: 0,
    top: 40,
    margin: 10,
  },
  titleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
  text: {
    height: 300,
    fontSize: 16,
  },
  fab: {
    position: 'absolute',
    margin: 20,
    right: 0,
    bottom: 0,
    backgroundColor: '#219653',
  },
});

interface Props {
  navigation: RootStackNavigationProps<'AddNotes'>;
  route: RouteProp<RootStackParamList, 'AddNotes'>;
}

function Page(props: Props): ReactElement {
  const [noteTitle, setNoteTitle] = useState('');
  const [noteDesc, setNoteDesc] = useState('');

  function onSaveNote(): void {
    props.route.params.addNotes({ noteTitle, noteDesc });
    props.navigation.goBack();
  }

  return (
    <Container>
      <Header title="Add a New Note" />
      <IconButton
        size={25}
        color="white"
        onPress={(): void => props.navigation.goBack()}
        style={styles.iconButton}
      />
      <View style={styles.container}>
        <TextInput
          label="Add Note Title here"
          value={noteTitle}
          mode="outlined"
          onChangeText={setNoteTitle}
          style={styles.title}
        />
        <TextInput
          label="Add Note Description"
          value={noteDesc}
          onChangeText={setNoteDesc}
          mode="flat"
          multiline={true}
          style={styles.text}
          scrollEnabled={true}
          returnKeyLabel="done"
          blurOnSubmit={true}
        />
        <FAB
          style={styles.fab}
          small
          disabled={noteTitle === ''}
          onPress={() => onSaveNote()}
        />
      </View>
    </Container>
  );
}

export default Page;
