import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {ScreenNavigationEnums} from '../../constants/enums/navigation';
import {MainNavigationOptions} from '../../config/navigation';
import {ProfileScreen, LoadingScreen} from 'screens';

const Stack = createNativeStackNavigator();

function MainStack() {
  return (
    <Stack.Navigator screenOptions={MainNavigationOptions}>
      <Stack.Screen
        name={ScreenNavigationEnums.LOADING_SCREEN}
        component={LoadingScreen}
      />
      <Stack.Screen
        name={ScreenNavigationEnums.PROFILE_SCREEN}
        component={ProfileScreen}
      />
    </Stack.Navigator>
  );
}

export default MainStack;
