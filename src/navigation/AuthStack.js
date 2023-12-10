import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SCREENS} from '../constants';
import {LoginWithUsernamePassword} from '../screens/Auth/Login';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={SCREENS.LOGIN_WITH_USERNAME_PASSWORD}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name={SCREENS.LOGIN_WITH_USERNAME_PASSWORD}
        component={LoginWithUsernamePassword}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
