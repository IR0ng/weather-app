/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Main from './src/container/Main';
import SignUp from './src/container/SignUp';
import SignIn from './src/container/SignIn';
const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Main} />
        <Stack.Screen name="Sign-Up" component={SignUp} />
        <Stack.Screen name="Sign-In" component={SignIn} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
