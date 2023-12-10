import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SCREENS, STACK} from '../constants';
import AuthStack from './AuthStack';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator
      //   initialRouteName={
      //     isLoggedIn ? STACK.AUTH : STACK.HOME // TODO: Add logic for login
      //   }
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={STACK.AUTH} component={AuthStack} />
      {/* <Stack.Screen name={STACK.HOME} component={HomeStack} />  TODO: Add Stack/Screens for HomeStack */}
    </Stack.Navigator>
  );
};

export default AppNavigator;
