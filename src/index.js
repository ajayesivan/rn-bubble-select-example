import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {
  HomeScreen,
  SCREEN_NAMES,
  SelectCustomScreen,
  SelectLibraryScreen,
} from './screens';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={SCREEN_NAMES.Home} component={HomeScreen} />
        <Stack.Screen
          name={SCREEN_NAMES.SelectLibrary}
          component={SelectLibraryScreen}
        />
        <Stack.Screen
          name={SCREEN_NAMES.SelectCustom}
          component={SelectCustomScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
