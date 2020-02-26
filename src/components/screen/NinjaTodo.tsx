import {
  Alert,
  Button,
  FlatList,
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React, { ReactElement, useState } from 'react';

import { RootStackNavigationProps } from '../navigation/RootStackNavigator';

interface Props {
  navigation: RootStackNavigationProps<'default'>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
  },
  header: {
    height: 90,
    paddingTop: 48,
    backgroundColor: 'coral',
  },
  title: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  item: {
    padding: 16,
    marginTop: 16,
    borderColor: '#bbb',
    borderWidth: 1,
    borderStyle: 'dashed',
    borderRadius: 1,
  },
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
});

function NinjaTodo(props: Props): ReactElement {
  const [todos, setTodos] = useState([
    { text: 'buy coffee', key: '1' },
    { text: 'create an app', key: '2' },
    { text: 'play on the switch', key: '3' },
  ]);
  const [text, setText] = useState('');

  const pressHandler = (key): void => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.key !== key);
    });
  };

  const submitHandler = (text): void => {
    if (text.length > 3) {
      setTodos((prevTodos) => {
        return [{ text, key: Math.random().toString() }, ...prevTodos];
      });
    } else {
      Alert.alert('OOPS', 'Todo must be over 3 characters long', [
        { text: 'Understood', onPress: () => console.log('alert closed') },
      ]);
    }
  };

  const changeHandler = (val): void => {
    setText(val);
  };

  const addHandler = (): void => {
    submitHandler(text);
    setText('');
  };

  return (
    <TouchableWithoutFeedback onPress={(): void => Keyboard.dismiss()}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>My Todos</Text>
        </View>
        <View style={styles.content}>
          <View>
            <TextInput
              style={styles.input}
              placeholder="new todo..."
              onChangeText={changeHandler}
              value={text}
            />
            <Button color="coral" onPress={addHandler} title="Add To do" />
          </View>
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({ item }) => (
                <TouchableOpacity onPress={(): void => pressHandler(item.key)}>
                  <Text style={styles.item}>{item.text}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default NinjaTodo;
