import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import SCREEN_NAMES, {
  FavoriteListScreen,
  SelectFavoriteScreen,
} from './screens';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{headerShown: false}}
          initialRouteName={SCREEN_NAMES.SelectFavoriteScreen}>
          <Stack.Screen
            name={SCREEN_NAMES.SelectFavoriteScreen}
            component={SelectFavoriteScreen}
          />
          <Stack.Screen
            name={SCREEN_NAMES.FavoriteListScreen}
            component={FavoriteListScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
