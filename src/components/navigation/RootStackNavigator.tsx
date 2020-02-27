import {
  StackNavigationProp,
  createStackNavigator,
} from '@react-navigation/stack';

import AddNotes from '../screen/AddNotes';
import Intro from '../screen/Intro';
import { NavigationContainer } from '@react-navigation/native';
import NormalNote from '../screen/NormalNote';
import React from 'react';
import Temp from '../screen/Temp';
import ToDo from '../screen/ToDo';
import ToDoNinja from '../screen/ToDoNinja';
import { useThemeContext } from '@dooboo-ui/native-theme';

export type RootStackParamList = {
  default: undefined;
  Intro: undefined;
  Temp: { param: string };
  ToDo: { param: string };
  ToDoNinja: { param: string };
  NormalNote: { param: string };
  AddNotes: { addNotes: ({ noteTitle, noteDesc }) => void };
};

export type RootStackNavigationProps<
  T extends keyof RootStackParamList = 'default'
> = StackNavigationProp<RootStackParamList, T>;

const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator(): React.ReactElement {
  const { theme } = useThemeContext();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Intro"
        screenOptions={{
          headerStyle: {
            backgroundColor: theme.background,
          },
          headerTitleStyle: { color: theme.fontColor },
          headerTintColor: theme.tintColor,
          mode: 'modal',
        }}
      >
        <Stack.Screen name="Intro" component={Intro} />
        <Stack.Screen name="Temp" component={Temp} />
        <Stack.Screen
          name="ToDo"
          component={ToDo}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ToDoNinja"
          component={ToDoNinja}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="NormalNote"
          component={NormalNote}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AddNotes"
          component={AddNotes}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootNavigator;
